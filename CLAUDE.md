# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
python3 -m http.server 5173   # Start local server at localhost:5173 (requires Python 3)
```

Override the port: `python3 -m http.server 8080`

## What This Is

A self-contained, static demo of 5 Spiff (sales commission) pages wired into a click-through flow. The primary use case is live AI-assisted design demos: the user runs the server, edits HTML/CSS in this repo, and the browser auto-reloads to show changes. There is no build step, no bundler, no package.json.

This is a cleaned version of the original `nl-site-demo` — all 60+ per-page `*_files/` CSS directories have been consolidated into a single `styles.css`. The HTML files have been renamed to clean short names.

## Page Flow

Five pages linked in linear sequence:

1. `index.html` — January 2025 Commissions table (entry point)
2. `statement.html` — Individual user statement (Ava Saasna)
3. `deal.html` — Deal detail (Nurix Therapeutics expansion)
4. `tracing.html` — Deal tracing/audit
5. `tickets.html` — Tickets modal with form

Each page links forward to the next; logo clicks and close/cancel buttons navigate back to `index.html`. The `statement.html` → `deal.html` navigation is JS-driven (click on the Nurix Therapeutics deal row).

## Key Technical Details

**React bundle is intentionally disabled** — the `<script>` tag loading the Spiff React app has `type="text/disabled-by-demo"` instead of `type="module"`. This preserves the static captured DOM. Do not re-enable it; doing so would cause the app to try to fetch live data from `us1.spiff.com` and wipe the demo content.

**Live reload** — `_livereload.js` is included in every HTML file. It polls the page's `Last-Modified` HTTP header every 600ms and reloads when the file changes. This works when serving via `python3 -m http.server` but not when opening files directly from the filesystem.

## Styling Conventions

- Brand color: `#545cff` (Spiff purple)
- Primary font: `"Hellix"` sans-serif
- All CSS lives in a single `styles.css` — edit this file to change styles across all pages
- All data is baked into the static HTML DOM — there is no API or data layer to update
