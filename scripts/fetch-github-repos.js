const fs = require('fs');
const path = require('path');
// const fetch = require('node-fetch'); // Native fetch in Node 18+

async function run() {
  try {
    const owner = process.env.GH_REPO_OWNER || process.env.GITHUB_REPOSITORY?.split('/')[0] || 'NimuthuGanegoda';
    const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
    const perPage = 100;
    let page = 1;
    let repos = [];

    while (true) {
      const url = `https://api.github.com/users/${owner}/repos?per_page=${perPage}&page=${page}&sort=updated`;
      const headers = { 'User-Agent': 'fetch-github-repos-script' };
      if (token) headers.Authorization = `token ${token}`;
      const res = await fetch(url, { headers });
      if (!res.ok) throw new Error(`GitHub API error ${res.status} ${res.statusText}`);
      const data = await res.json();
      if (!Array.isArray(data) || data.length === 0) break;
      repos = repos.concat(data);
      if (data.length < perPage) break;
      page++;
    }

    // Map to minimal shape used by the site
    const mapped = repos
      .filter(r => !r.private && !r.fork) // Exclude private repos and forks
      .map(r => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        homepage: r.homepage,
        language: r.language,
        updated_at: r.updated_at,
        topics: r.topics || [],
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count
      }));

    const outPath = path.join(__dirname, '..', 'src', 'data', 'github_repos.json');
    fs.writeFileSync(outPath, JSON.stringify(mapped, null, 2));
    console.log(`Wrote ${mapped.length} repos to ${outPath}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
