# Spiff Sales Commission Demo

A self-contained, static click-through demo of the [Spiff](https://spiff.com) sales commission platform. Five pages wired into a linear flow — no build step, no framework, no dependencies.

Built for live AI-assisted design demos: run a local server, edit HTML/CSS, and the browser auto-reloads instantly.

---

## Live Demo

👉 [mkohn4.github.io/nl-site-clean](https://mkohn4.github.io/nl-site-clean/)

---

## Pages

| Page | File | Description |
|------|------|-------------|
| 1 | `index.html` | January 2025 Commissions table |
| 2 | `statement.html` | Individual rep statement (Ava Saasna) |
| 3 | `deal.html` | Deal detail (Nurix Therapeutics expansion) |
| 4 | `tracing.html` | Commission tracing & audit trail |
| 5 | `tickets.html` | Dispute tickets modal |

Each page links forward to the next. Logos and close/cancel buttons return to `index.html`.

---

## Running Locally

Requires Python 3:

```bash
python3 -m http.server 5173
```

Then open [localhost:5173](http://localhost:5173) in your browser.

The included `_livereload.js` polls for file changes every 600ms and auto-reloads the page — no manual refresh needed while editing.

---

## Structure

```
nl-site-clean/
├── index.html        # Entry point
├── statement.html
├── deal.html
├── tracing.html
├── tickets.html
├── styles.css        # Single consolidated stylesheet for all pages
└── _livereload.js    # Local dev auto-reload script
```

All CSS from the original app is consolidated into a single `styles.css`. All page data is baked into the static HTML — there is no API or backend.

---

## Technical Notes

- **React is intentionally disabled** — the Spiff React bundle script tag has `type="text/disabled-by-demo"` to preserve the captured static DOM. Re-enabling it would cause the app to fetch live data from `us1.spiff.com` and wipe the demo content.
- **No external asset dependencies** — all CSS `url()` references use inline `data:` URIs.
- **Brand color**: `#545cff` · **Font**: Hellix (loaded from Spiff's CDN)
