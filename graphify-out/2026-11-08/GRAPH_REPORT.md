# Graph Report - NimuthuGanegoda  (2026-09-27)

## Corpus Check
- 27 files · ~8,522 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 2, .css 1)

## Summary
- 106 nodes · 170 edges · 12 communities (7 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c203cd24`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- LanguageContext.tsx
- cv.ts
- layout.tsx
- app/page.tsx
- generate-cv-pdf.js
- generate-profile-stats.js
- ref_next
- ScrollReveal.tsx
- next-env.d.ts

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 15 edges
2. `main()` - 10 edges
3. `esc()` - 6 edges
4. `svg()` - 6 edges
5. `num()` - 5 edges
6. `renderOverview()` - 5 edges
7. `renderStreak()` - 5 edges
8. `cv` - 5 edges
9. `renderLanguages()` - 4 edges
10. `renderGraph()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `CVPage()` --calls--> `useLanguage()`  [EXTRACTED]
  src/app/cv/page.tsx → src/contexts/LanguageContext.tsx
- `HomePage()` --calls--> `useLanguage()`  [EXTRACTED]
  src/app/page.tsx → src/contexts/LanguageContext.tsx
- `Footer()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Footer.tsx → src/contexts/LanguageContext.tsx
- `TranslationNotice()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/TranslationNotice.tsx → src/contexts/LanguageContext.tsx
- `LanguageSelector()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/LanguageSelector.tsx → src/contexts/LanguageContext.tsx

## Import Cycles
- None detected.

## Communities (12 total, 5 thin omitted)

### Community 0 - "LanguageContext.tsx"
Cohesion: 0.16
Nodes (13): ref_react, ref_testing_library_jest_dom, ref_testing_library_react, LanguageSelector(), NavBar(), ThemeToggle(), TranslationNotice(), Language (+5 more)

### Community 1 - "cv.ts"
Cohesion: 0.16
Nodes (11): CVPage(), Footer(), CertificationItem, cv, CVData, EducationItem, ExperienceItem, LanguageItem (+3 more)

### Community 2 - "layout.tsx"
Cohesion: 0.24
Nodes (6): src_app_globals, inter, metadata, Analytics(), SkipLink(), StructuredData()

### Community 3 - "app/page.tsx"
Cohesion: 0.25
Nodes (6): ref_framer_motion, ref_lucide_react, ref_three, HomePage(), ParticleBackground(), ParticleBackgroundProps

### Community 4 - "generate-cv-pdf.js"
Cohesion: 0.18
Nodes (8): ref_fs, ref_path, ref_puppeteer, fs, path, fs, path, puppeteer

### Community 5 - "generate-profile-stats.js"
Cohesion: 0.20
Nodes (20): ref_child_process, computeStats(), esc(), { execFileSync }, fetchAvatar(), fetchProfile(), fs, getToken() (+12 more)

### Community 6 - "ref_next"
Cohesion: 0.29
Nodes (4): config, createJestConfig, ref_jest, ref_next

## Knowledge Gaps
- **28 isolated node(s):** `createJestConfig`, `config`, `fs`, `path`, `puppeteer` (+23 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 50 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `LanguageContext.tsx` to `cv.ts`, `app/page.tsx`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Why does `NavBar()` connect `LanguageContext.tsx` to `layout.tsx`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **What connects `createJestConfig`, `config`, `fs` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._