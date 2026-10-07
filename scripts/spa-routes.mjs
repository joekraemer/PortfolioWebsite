// Post-build step: give every client-side route a real file on GitHub Pages.
//
// GitHub Pages has no SPA fallback, so a direct load of /PortfolioWebsite/resume
// would 404 and bounce through public/404.html. Copying build/index.html to a
// static file per route makes those URLs return HTTP 200 with the app shell.
//
// File naming: Pages serves /foo from foo.html with no redirect, but a
// directory foo/index.html makes /foo answer 301 -> /foo/. So each route gets
// <route>.html. /projects is also the parent of /projects/<slug>, so it gets
// both projects.html (for /projects) and projects/index.html (for /projects/).
//
// Routes are read from src/App.js so this list cannot drift from the router.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = join(root, 'build');
const indexHtml = readFileSync(join(buildDir, 'index.html'));
const appSource = readFileSync(join(root, 'src', 'App.js'), 'utf8');

const routes = [...appSource.matchAll(/<Route\s+path=['"]([^'"]+)['"]/g)]
  .map((m) => m[1])
  .filter((p) => p !== '/' && !p.includes(':') && !p.includes('*'));

if (routes.length === 0) {
  throw new Error('spa-routes: no routes found in src/App.js; check the <Route path=...> pattern');
}

const write = (relPath) => {
  const target = join(buildDir, relPath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, indexHtml);
  console.log(`spa-routes: build/${relPath}`);
};

for (const route of routes) {
  const rel = route.replace(/^\/+|\/+$/g, '');
  write(`${rel}.html`);
  // A route that is also a parent of other routes needs a directory index too,
  // because the directory exists and /<route>/ would otherwise 404.
  if (routes.some((r) => r.startsWith(`${route}/`))) {
    write(`${rel}/index.html`);
  }
}

if (!existsSync(join(buildDir, '404.html'))) {
  throw new Error('spa-routes: build/404.html is missing; unknown paths would lose the SPA redirect');
}
