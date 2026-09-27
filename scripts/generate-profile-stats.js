#!/usr/bin/env node
/**
 * generate-profile-stats.js
 *
 * Renders self-hosted, dependency-free SVG "visual cards" for the GitHub profile
 * README directly from the GitHub GraphQL API. Everything is committed to
 * `assets/` so the profile never depends on a third-party stats host being up.
 *
 * Usage:
 *   GITHUB_TOKEN=xxx node scripts/generate-profile-stats.js
 *   (falls back to `gh auth token` when no token is provided)
 *
 * Outputs:
 *   assets/profile-overview.svg      - contributions / repos / stars / followers
 *   assets/profile-streak.svg        - current + longest contribution streak
 *   assets/profile-languages.svg     - top languages by bytes written
 *   assets/contribution-graph.svg    - last-12-months contribution heatmap
 *   assets/typing-header.svg         - animated terminal header
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const USERNAME = process.env.PROFILE_USERNAME || 'NimuthuGanegoda';
const OUT_DIR = path.join(__dirname, '..', 'assets');

const THEME = {
  bgFrom: '#070b12',
  bgTo: '#0e1727',
  stroke: '#1d2b40',
  text: '#e6edf3',
  muted: '#8b98a9',
  accent: '#00f2ff',
  accentSoft: 'rgba(0, 242, 255, 0.12)',
  violet: '#a855f7',
  empty: '#101a26',
  levels: ['#0d1a24', '#0a3b46', '#0e6b78', '#11a2ad', '#00f2ff'],
};

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace";

/* ------------------------------------------------------------------ data --- */

function getToken() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN;
  try {
    const out = execFileSync('gh', ['auth', 'token'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    return out.trim() || null;
  } catch (err) {
    return null;
  }
}

const QUERY = `
query($login: String!) {
  user(login: $login) {
    login
    name
    avatarUrl(size: 96)
    createdAt
    followers { totalCount }
    following { totalCount }
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays { date contributionCount contributionLevel }
        }
      }
    }
    repositories(ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC, first: 100) {
      totalCount
      nodes {
        name
        stargazerCount
        forkCount
        updatedAt
        languages(first: 20, orderBy: { field: SIZE, direction: DESC }) {
          edges { size node { name color } }
        }
      }
    }
    allRepositories: repositories(ownerAffiliations: OWNER, privacy: PUBLIC, first: 100) {
      nodes { name stargazerCount forkCount }
    }
  }
}`;

async function fetchProfile() {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': 'profile-stats-generator',
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers,
    body: JSON.stringify({ query: QUERY, variables: { login: USERNAME } }),
  });

  if (!res.ok) throw new Error(`GitHub API returned ${res.status} ${res.statusText}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors.map((e) => e.message).join('; '));
  return json.data.user;
}

function computeStats(user) {
  const calendar = user.contributionsCollection.contributionCalendar;
  const days = calendar.weeks.flatMap((w) => w.contributionDays);

  // Streaks are computed over the calendar GitHub hands back (last 12 months).
  let current = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].contributionCount > 0) current++;
    else if (i === days.length - 1) continue; // today may still be empty
    else break;
  }

  let longest = 0;
  let run = 0;
  let bestDay = 0;
  let activeDays = 0;
  for (const day of days) {
    if (day.contributionCount > 0) {
      run++;
      activeDays++;
      longest = Math.max(longest, run);
      bestDay = Math.max(bestDay, day.contributionCount);
    } else {
      run = 0;
    }
  }

  const langBytes = new Map();
  const langColors = new Map();
  for (const repo of user.repositories.nodes) {
    for (const edge of repo.languages?.edges || []) {
      const name = edge.node.name;
      langBytes.set(name, (langBytes.get(name) || 0) + edge.size);
      if (edge.node.color) langColors.set(name, edge.node.color);
    }
  }

  const langTotal = [...langBytes.values()].reduce((a, b) => a + b, 0) || 1;
  const languages = [...langBytes.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, bytes]) => ({
      name,
      bytes,
      color: langColors.get(name) || THEME.accent,
      pct: (bytes / langTotal) * 100,
    }));

  // Stars are counted across every public repository (forks included), while
  // language share is measured only on original work.
  const allRepos = user.allRepositories.nodes;
  const repos = user.repositories.nodes;
  return {
    login: user.login,
    name: user.name || user.login,
    avatarUrl: user.avatarUrl,
    memberSince: new Date(user.createdAt).getFullYear(),
    followers: user.followers.totalCount,
    following: user.following.totalCount,
    totalContributions: calendar.totalContributions,
    weeks: calendar.weeks,
    days,
    currentStreak: current,
    longestStreak: longest,
    bestDay,
    activeDays,
    repoCount: user.repositories.totalCount,
    stars: allRepos.reduce((sum, r) => sum + r.stargazerCount, 0),
    forks: allRepos.reduce((sum, r) => sum + r.forkCount, 0),
    languages,
  };
}

/* ------------------------------------------------------------------ util --- */

const esc = (str) =>
  String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const num = (n) => n.toLocaleString('en-US');

const svg = (width, height, label, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(label)}" font-family="${FONT}">
  <defs>
    <linearGradient id="card" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${THEME.bgFrom}"/>
      <stop offset="100%" stop-color="${THEME.bgTo}"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${THEME.accent}"/>
      <stop offset="100%" stop-color="${THEME.violet}"/>
    </linearGradient>
  </defs>
  <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="14" fill="url(#card)" stroke="${THEME.stroke}"/>
${body}
</svg>
`;

/* ------------------------------------------------------------- overview --- */

function renderOverview(stats) {
  const W = 470;
  const H = 176;
  const tiles = [
    { label: 'Contributions', value: num(stats.totalContributions) },
    { label: 'Repositories', value: num(stats.repoCount) },
    { label: 'Stars', value: num(stats.stars) },
    { label: 'Followers', value: num(stats.followers) },
  ];

  const tileW = 98;
  const gap = 10;
  const startX = 24;
  const tileY = 88;

  const tileSvg = tiles
    .map((tile, i) => {
      const x = startX + i * (tileW + gap);
      return `  <g>
    <rect x="${x}" y="${tileY}" width="${tileW}" height="64" rx="10" fill="#0b1320" stroke="${THEME.stroke}"/>
    <text x="${x + tileW / 2}" y="${tileY + 30}" text-anchor="middle" fill="${THEME.text}" font-size="19" font-weight="700">${esc(tile.value)}</text>
    <text x="${x + tileW / 2}" y="${tileY + 48}" text-anchor="middle" fill="${THEME.muted}" font-size="9.5" font-weight="600" letter-spacing="0.8">${esc(tile.label.toUpperCase())}</text>
  </g>`;
    })
    .join('\n');

  return svg(
    W,
    H,
    `${stats.login} GitHub overview`,
    `  <clipPath id="avatarClip"><circle cx="46" cy="46" r="22"/></clipPath>
  <image href="${esc(stats.avatarUrl)}" x="24" y="24" width="44" height="44" clip-path="url(#avatarClip)" preserveAspectRatio="xMidYMid slice"/>
  <circle cx="46" cy="46" r="22" fill="none" stroke="${THEME.accent}" stroke-opacity="0.5"/>
  <text x="80" y="43" fill="${THEME.text}" font-size="16.5" font-weight="700">${esc(stats.name)}</text>
  <text x="80" y="61" fill="${THEME.muted}" font-size="12">@${esc(stats.login)} · member since ${stats.memberSince}</text>
  <rect x="24" y="76" width="${W - 48}" height="1" fill="${THEME.stroke}"/>
${tileSvg}
  <text x="24" y="170" fill="#5c6a7d" font-size="9.5" font-family="${MONO}">live from the GitHub GraphQL API · refreshed automatically</text>`
  );
}

/* --------------------------------------------------------------- streak --- */

function renderStreak(stats) {
  const W = 470;
  const H = 176;

  const flame = `<g transform="translate(24,26)">
    <path d="M12 2c2.2 3.2 5.4 5.1 5.4 8.9 0 1.6-.7 3-1.8 4 .3-1.6-.6-3.2-2-4.2.4 2.4-1.2 3.6-2.6 4.8-1.6 1.4-2.4 3-2.4 4.6C8.6 24.6 12.4 28 17 28c5.6 0 9.6-4.1 9.6-9.6 0-7.4-6.4-10.6-14.6-16.4z" fill="url(#accent)" opacity="0.9">
      <animate attributeName="opacity" values="0.65;1;0.65" dur="2.6s" repeatCount="indefinite"/>
    </path>
  </g>`;

  const rows = [
    { label: 'Longest streak', value: `${num(stats.longestStreak)} days` },
    { label: 'Active days', value: num(stats.activeDays) },
    { label: 'Busiest day', value: `${num(stats.bestDay)} commits` },
  ];

  const rowsSvg = rows
    .map((r, i) => {
      const y = 96 + i * 26;
      return `  <text x="196" y="${y}" fill="${THEME.muted}" font-size="10" font-weight="600" letter-spacing="0.6">${esc(r.label.toUpperCase())}</text>
  <text x="${W - 24}" y="${y}" text-anchor="end" fill="${THEME.text}" font-size="13.5" font-weight="700">${esc(r.value)}</text>`;
    })
    .join('\n');

  return svg(
    W,
    H,
    `${stats.login} contribution streak`,
    `${flame}
  <text x="62" y="40" fill="${THEME.text}" font-size="14" font-weight="700" letter-spacing="0.4">Contribution streak</text>
  <text x="24" y="92" fill="${THEME.accent}" font-size="44" font-weight="800">${num(stats.currentStreak)}</text>
  <text x="24" y="112" fill="${THEME.muted}" font-size="12" font-weight="600" letter-spacing="0.5">DAYS IN A ROW</text>
  <text x="24" y="136" fill="${THEME.muted}" font-size="11.5">${num(stats.totalContributions)} contributions</text>
  <text x="24" y="152" fill="${THEME.muted}" font-size="11.5">in the last twelve months</text>
  <rect x="178" y="76" width="1" height="72" fill="${THEME.stroke}"/>
${rowsSvg}`
  );
}

/* ------------------------------------------------------------ languages --- */

function renderLanguages(stats) {
  const W = 470;
  const H = 196;
  const barX = 24;
  const barY = 82;
  const barW = W - 48;
  const barH = 14;

  let cursor = 0;
  const segments = stats.languages
    .map((lang) => {
      const w = Math.max(4, (lang.pct / 100) * barW);
      const x = barX + cursor;
      cursor += w;
      return `    <rect x="${x.toFixed(2)}" y="${barY}" width="${w.toFixed(2)}" height="${barH}" fill="${lang.color}"><title>${esc(lang.name)} ${lang.pct.toFixed(1)}%</title></rect>`;
    })
    .join('\n');

  const legend = stats.languages
    .map((lang, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 24 + col * 218;
      const y = 122 + row * 24;
      return `  <g>
    <circle cx="${x + 5}" cy="${y}" r="5" fill="${lang.color}"/>
    <text x="${x + 18}" y="${y + 4}" fill="${THEME.text}" font-size="12" font-weight="600">${esc(lang.name)}</text>
    <text x="${x + 116}" y="${y + 4}" fill="${THEME.muted}" font-size="11.5" font-family="${MONO}">${lang.pct.toFixed(1)}%</text>
  </g>`;
    })
    .join('\n');

  return svg(
    W,
    H,
    `${stats.login} top languages`,
    `  <text x="24" y="38" fill="${THEME.text}" font-size="14" font-weight="700">Most used languages</text>
  <text x="24" y="58" fill="${THEME.muted}" font-size="11">by bytes committed across public repositories</text>
  <g clip-path="url(#barRadius)">
    <clipPath id="barRadius"><rect x="${barX}" y="${barY}" width="${barW}" height="${barH}" rx="7"/></clipPath>
${segments}
  </g>
${legend}`
  );
}

/* ----------------------------------------------------- contribution map --- */

function renderGraph(stats) {
  const cell = 11;
  const gap = 3;
  const leftPad = 34;
  const topPad = 52;
  const weeks = stats.weeks.slice(-52);
  const W = leftPad + weeks.length * (cell + gap) + 20;
  const H = 186;

  const cells = weeks
    .map((week, wi) =>
      week.contributionDays
        .map((day, di) => {
          const x = leftPad + wi * (cell + gap);
          const y = topPad + di * (cell + gap);
          const level = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 }[
            day.contributionLevel
          ] ?? 0;
          const isLast = wi === weeks.length - 1 && di === week.contributionDays.length - 1;
          const anim = isLast
            ? `<animate attributeName="opacity" values="1;0.45;1" dur="2.2s" repeatCount="indefinite"/>`
            : '';
          return `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="2.5" fill="${THEME.levels[level]}">${anim}<title>${day.contributionCount} contributions on ${day.date}</title></rect>`;
        })
        .join('')
    )
    .join('');

  const monthLabels = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const date = new Date(week.contributionDays[0].date);
    const month = date.getMonth();
    if (month !== lastMonth) {
      lastMonth = month;
      monthLabels.push(
        `<text x="${leftPad + wi * (cell + gap)}" y="${topPad - 8}" fill="${THEME.muted}" font-size="9.5">${date.toLocaleString('en-US', { month: 'short' })}</text>`
      );
    }
  });

  const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', '']
    .map((label, i) =>
      label
        ? `<text x="6" y="${topPad + i * (cell + gap) + 9}" fill="${THEME.muted}" font-size="9.5">${label}</text>`
        : ''
    )
    .join('\n  ');

  const legendX = W - 20 - 140;

  return svg(
    W,
    H,
    `${stats.login} contribution graph`,
    `  <text x="24" y="30" fill="${THEME.text}" font-size="14" font-weight="700">${num(stats.totalContributions)} contributions in the last year</text>
  <g>
  ${dayLabels}
  </g>
  ${monthLabels.join('\n  ')}
  ${cells}
  <g transform="translate(${legendX}, ${H - 22})">
    <text x="0" y="0" fill="${THEME.muted}" font-size="9.5">Less</text>
    ${THEME.levels
      .map((c, i) => `<rect x="${32 + i * 15}" y="-9" width="11" height="11" rx="2.5" fill="${c}"/>`)
      .join('')}
    <text x="${32 + THEME.levels.length * 15 + 4}" y="0" fill="${THEME.muted}" font-size="9.5">More</text>
  </g>`
  );
}

/* ---------------------------------------------------------- typing header -- */

function renderTyping(stats) {
  const W = 780;
  const H = 132;
  const charW = 9.1;
  const lineH = 22;
  const startY = 44;

  const lines = [
    { text: `nimuthu@neos:~$ whoami`, color: THEME.accent, prompt: true },
    { text: `${stats.name} — Cybersecurity undergrad @ ECU`, color: THEME.text },
    { text: `SOC Engineer Intern @ MillenniumIT ESP · Database Lead @ BusGo`, color: '#a5b4c8' },
    { text: `shipping: NeOS · Eien-no-Kiroku · Mirai-Koyomi · Kitsune-Gaze`, color: THEME.violet },
  ];

  const cycle = 12; // seconds for the whole loop
  const typeSpeed = 0.028; // seconds per character
  let t = 0.4;
  const rendered = lines
    .map((line, i) => {
      const width = line.text.length * charW;
      const dur = line.text.length * typeSpeed;
      const y = startY + i * lineH;
      const b = (t / cycle).toFixed(4);
      const e = ((t + dur) / cycle).toFixed(4);
      t += dur + 0.18;
      const clipId = `typeClip${i}`;
      const color = line.prompt ? THEME.accent : line.color;
      return `  <clipPath id="${clipId}"><rect x="26" y="${y - 15}" height="20" width="0">
      <animate attributeName="width" values="0;0;${width.toFixed(1)};${width.toFixed(1)}" keyTimes="0;${b};${e};1" dur="${cycle}s" repeatCount="indefinite"/>
    </rect></clipPath>
  <text x="26" y="${y}" fill="${color}" font-size="15" font-family="${MONO}" textLength="${width.toFixed(1)}" lengthAdjust="spacingAndGlyphs" clip-path="url(#${clipId})">${esc(line.text)}</text>`;
    })
    .join('\n');

  const lastWidth = lines[lines.length - 1].text.length * charW;
  const cursorX = 26 + lastWidth + 6;
  const cursorY = startY + (lines.length - 1) * lineH - 12;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Terminal style introduction" font-family="${MONO}">
  <defs>
    <linearGradient id="term" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#05080f"/>
      <stop offset="100%" stop-color="#0b1420"/>
    </linearGradient>
  </defs>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="14" fill="url(#term)" stroke="${THEME.stroke}"/>
  <circle cx="22" cy="20" r="4.5" fill="#ff5f57"/>
  <circle cx="38" cy="20" r="4.5" fill="#febc2e"/>
  <circle cx="54" cy="20" r="4.5" fill="#28c840"/>
  <text x="${W / 2}" y="24" fill="#4b5a6d" font-size="11" text-anchor="middle" letter-spacing="2">~/profile/README.md</text>
${rendered}
  <rect x="${cursorX.toFixed(1)}" y="${cursorY}" width="9" height="16" fill="${THEME.accent}">
    <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.5;0.501;1" dur="1.06s" repeatCount="indefinite"/>
  </rect>
</svg>
`;
}

/* ------------------------------------------------------------------ main --- */

async function main() {
  const user = await fetchProfile();
  const stats = computeStats(user);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const files = {
    'profile-overview.svg': renderOverview(stats),
    'profile-streak.svg': renderStreak(stats),
    'profile-languages.svg': renderLanguages(stats),
    'contribution-graph.svg': renderGraph(stats),
    'typing-header.svg': renderTyping(stats),
  };

  for (const [name, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(OUT_DIR, name), content);
    console.log(`✓ wrote assets/${name}`);
  }

  console.log(
    `\n${stats.login}: ${stats.totalContributions} contributions · streak ${stats.currentStreak}d ` +
      `(best ${stats.longestStreak}d) · ${stats.repoCount} repos · ${stats.stars} stars`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
