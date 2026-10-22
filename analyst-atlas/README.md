# Analyst Atlas

A self-contained, static, single-page learning platform. No build step, framework or server-side account required.

## Run locally

You must serve ES modules via HTTP (opening `index.html` with `file://` can block imports):

```bash
cd analyst-atlas
python -m http.server 8000
```

Visit http://localhost:8000. You can also use VS Code's **Live Server** extension.

## Edit course content

Open `data.js`. Each object in `courses` has its display metadata, `lessons` (arrays in this order: title, duration, learning objective, practical tip, sample code), `quiz` (question, answer options, correct option index, explanation), `cheats` and `datasets`. Edit entries and refresh. Update display counts if you change the number of courses or lessons (the current site dynamically calculates the actual lesson count except hero marketing figures).

## Deploy

**GitHub Pages:** push these files to a repo, then open Settings → Pages → Deploy from a branch → main / root. The `#` routes work without redirects.

**Netlify:** drag the entire folder into Netlify's deploy interface or connect a GitHub repo. No build command; publish directory is `.`.

## Features

- Three persisted themes (first visit follows OS preference)
- 50 lessons, real code examples, five 5-question quizzes
- Chart.js loaded lazily from CDN for interactive charts
- Local progress, streak, badges and JSON export
- Search and command palette (Ctrl/Cmd+K)
- Guided Excel, SQL and simulated Python labs; interactive dashboard tile builder

## Limits

This is a static teaching experience. SQL and Python examples are intentionally simulated in JS rather than executing arbitrary SQL/Python. No login, cloud sync, server-side grading or full BI editor. Chart.js and Google Fonts require internet access. Lighthouse performance depends on network and deployment; 95+ scores are a target, not a verified result. Streak increments on days with completed lessons or quiz attempts, not simple visits.

## Future upgrades

1. Add IndexedDB and cloud sync with opt-in accounts.
2. Integrate DuckDB-WASM for a sandboxed, complete SQL playground.
3. Add Pyodide for actual in-browser Pandas-like exercises where supported.
4. Add project-based capstones with downloadable starter CSVs and rubrics.
5. Add assessment analytics, spaced repetition and resume-friendly certificates.