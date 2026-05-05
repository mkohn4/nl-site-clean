// Tiny live-reload: polls the current page's Last-Modified header.
// Works with python3 -m http.server (which sets Last-Modified from file mtime).
// Reloads the page whenever Claude saves an edit to the served HTML.
(function () {
  if (window.__livereloadStarted) return;
  window.__livereloadStarted = true;

  let lastMod = null;
  let inFlight = false;

  async function check() {
    if (inFlight) return;
    inFlight = true;
    try {
      const res = await fetch(location.pathname + location.search, {
        method: 'HEAD',
        cache: 'no-store',
      });
      const lm = res.headers.get('Last-Modified');
      if (lm) {
        if (lastMod && lm !== lastMod) {
          location.reload();
          return;
        }
        lastMod = lm;
      }
    } catch (e) {
      // ignore transient errors (server restart, offline, etc.)
    } finally {
      inFlight = false;
    }
  }

  setInterval(check, 600);
  check();
})();
