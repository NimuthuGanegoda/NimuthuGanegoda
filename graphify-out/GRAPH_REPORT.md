# Graph Report - NimuthuGanegoda  (2026-11-08)

## Corpus Check
- 27 files · ~8,522 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 2, .css 1)

## Summary
- 106 nodes · 180 edges · 12 communities (6 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fe75e510`
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

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 15 edges
2. `main()` - 10 edges
3. `RootLayout()` - 7 edges
4. `NavBar()` - 7 edges
5. `esc()` - 6 edges
6. `svg()` - 6 edges
7. `num()` - 5 edges
8. `renderOverview()` - 5 edges
9. `renderStreak()` - 5 edges
10. `ThemeToggle()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `CVPage()` --calls--> `useLanguage()`  [EXTRACTED]
  src/app/cv/page.tsx → src/contexts/LanguageContext.tsx
- `RootLayout()` --calls--> `NavBar()`  [EXTRACTED]
  src/app/layout.tsx → src/components/NavBar.tsx
- `HomePage()` --calls--> `useLanguage()`  [EXTRACTED]
  src/app/page.tsx → src/contexts/LanguageContext.tsx
- `Footer()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Footer.tsx → src/contexts/LanguageContext.tsx
- `TranslationNotice()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/TranslationNotice.tsx → src/contexts/LanguageContext.tsx

## Import Cycles
- None detected.

## Communities (12 total, 6 thin omitted)

### Community 0 - "LanguageContext.tsx"
Cohesion: 0.17
Nodes (10): CVPage(), LanguageSelector(), NavBar(), ThemeToggle(), TranslationNotice(), Language, LanguageContext, LanguageContextType (+2 more)

### Community 1 - "cv.ts"
Cohesion: 0.22
Nodes (8): CertificationItem, CVData, EducationItem, ExperienceItem, LanguageItem, ProjectItem, ReferenceItem, SkillGroup

### Community 2 - "layout.tsx"
Cohesion: 0.23
Nodes (9): inter, metadata, RootLayout(), Analytics(), Footer(), SkipLink(), StructuredData(), LanguageProvider() (+1 more)

### Community 3 - "app/page.tsx"
Cohesion: 0.31
Nodes (4): HomePage(), SlideIn(), ParticleBackground(), ParticleBackgroundProps

### Community 4 - "generate-cv-pdf.js"
Cohesion: 0.18
Nodes (5): fs, path, fs, path, puppeteer

### Community 5 - "generate-profile-stats.js"
Cohesion: 0.20
Nodes (19): computeStats(), esc(), { execFileSync }, fetchAvatar(), fetchProfile(), fs, getToken(), main() (+11 more)

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `LanguageContext.tsx` to `layout.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `NavBar()` connect `LanguageContext.tsx` to `layout.tsx`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Why does `LanguageProvider()` connect `layout.tsx` to `LanguageContext.tsx`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._