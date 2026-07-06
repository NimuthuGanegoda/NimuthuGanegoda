# Graph Report - .  (2026-07-06)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 69 nodes · 90 edges · 15 communities (12 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0752848b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_LanguageContext.tsx|LanguageContext.tsx]]
- [[_COMMUNITY_cv.ts|cv.ts]]
- [[_COMMUNITY_layout.tsx|layout.tsx]]
- [[_COMMUNITY_page.tsx|page.tsx]]
- [[_COMMUNITY_generate-cv-pdf.js|generate-cv-pdf.js]]
- [[_COMMUNITY_fetch-github-repos.js|fetch-github-repos.js]]
- [[_COMMUNITY_jest.config.ts|jest.config.ts]]
- [[_COMMUNITY_ScrollReveal.tsx|ScrollReveal.tsx]]

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 15 edges
2. `cv` - 5 edges
3. `LanguageProvider()` - 3 edges
4. `CVPage()` - 2 edges
5. `HomePage()` - 2 edges
6. `Analytics()` - 2 edges
7. `Footer()` - 2 edges
8. `LanguageSelector()` - 2 edges
9. `NavBar()` - 2 edges
10. `ParticleBackground()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `CVPage()` --calls--> `useLanguage()`  [EXTRACTED]
  src/app/cv/page.tsx → src/contexts/LanguageContext.tsx
- `HomePage()` --calls--> `useLanguage()`  [EXTRACTED]
  src/app/page.tsx → src/contexts/LanguageContext.tsx
- `Footer()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Footer.tsx → src/contexts/LanguageContext.tsx
- `LanguageSelector()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/LanguageSelector.tsx → src/contexts/LanguageContext.tsx
- `NavBar()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/NavBar.tsx → src/contexts/LanguageContext.tsx

## Import Cycles
- None detected.

## Communities (15 total, 3 thin omitted)

### Community 0 - "LanguageContext.tsx"
Cohesion: 0.23
Nodes (10): LanguageSelector(), NavBar(), ThemeToggle(), TranslationNotice(), Language, LanguageContext, LanguageContextType, LanguageProvider() (+2 more)

### Community 1 - "cv.ts"
Cohesion: 0.16
Nodes (11): CVPage(), Footer(), StructuredData(), CertificationItem, cv, CVData, EducationItem, ExperienceItem (+3 more)

### Community 2 - "layout.tsx"
Cohesion: 0.32
Nodes (4): inter, metadata, Analytics(), SkipLink()

### Community 3 - "page.tsx"
Cohesion: 0.40
Nodes (3): HomePage(), ParticleBackground(), ParticleBackgroundProps

### Community 4 - "generate-cv-pdf.js"
Cohesion: 0.40
Nodes (3): fs, path, puppeteer

## Knowledge Gaps
- **22 isolated node(s):** `createJestConfig`, `config`, `fs`, `path`, `puppeteer` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `LanguageContext.tsx` to `cv.ts`, `page.tsx`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Why does `cv` connect `cv.ts` to `page.tsx`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Why does `LanguageProvider()` connect `LanguageContext.tsx` to `layout.tsx`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `createJestConfig`, `config`, `fs` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._