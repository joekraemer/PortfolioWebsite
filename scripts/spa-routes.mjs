// Post-build step: give every page a real HTML file on GitHub Pages, with that
// page's own <head>, and write sitemap.xml.
//
// GitHub Pages has no SPA fallback, so a direct load of /PortfolioWebsite/resume
// would 404 and bounce through public/404.html. Copying build/index.html to a
// static file per route makes those URLs return HTTP 200 with the app shell.
//
// Link-preview crawlers don't run JavaScript, so each copy gets its own
// <title>, description, og:/twitter: tags, og:url and canonical link, taken
// from src/routes.js. The client sets the same title again via RouteTitle.
//
// File naming: Pages serves /foo from foo.html with no redirect. Each route
// also gets foo/index.html so /foo/ answers 200; with both files present Pages
// still serves /foo from foo.html (a lone foo/index.html would 301 /foo).
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes, pageTitle, SITE_URL } from '../src/routes.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = join(root, 'build');
const template = readFileSync(join(buildDir, 'index.html'), 'utf8');

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const urlFor = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

// Replace exactly one match of `pattern` in `html`, or fail the build, so a
// changed index.html can't silently ship pages with the home page's tags.
function replaceOnce(html, pattern, replacement, what) {
  const matches = html.match(new RegExp(pattern.source, 'g')) || [];
  if (matches.length !== 1) {
    throw new Error(`spa-routes: expected one ${what} in index.html, found ${matches.length}`);
  }
  return html.replace(pattern, replacement);
}

function headFor(route) {
  const title = escapeHtml(pageTitle(route));
  const description = escapeHtml(route.description);
  const url = escapeHtml(urlFor(route.path));
  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, '<title>');
  for (const [attr, name, value] of [
    ['name', 'description', description],
    ['property', 'og:title', title],
    ['property', 'og:description', description],
    ['name', 'twitter:title', title],
    ['name', 'twitter:description', description],
  ]) {
    html = replaceOnce(
      html,
      new RegExp(`<meta ${attr}="${name}" content="[^"]*" />`),
      `<meta ${attr}="${name}" content="${value}" />`,
      `${name} tag`,
    );
  }
  return replaceOnce(
    html,
    /(<meta property="og:type" [^>]*\/>)/,
    `$1\n    <meta property="og:url" content="${url}" />\n    <link rel="canonical" href="${url}" />`,
    'og:type tag',
  );
}

const write = (relPath, html) => {
  const target = join(buildDir, relPath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
  console.log(`spa-routes: build/${relPath}`);
};

for (const route of routes) {
  const html = headFor(route);
  if (route.path === '/') {
    write('index.html', html);
    continue;
  }
  const rel = route.path.replace(/^\/+|\/+$/g, '');
  write(`${rel}.html`, html);
  // Also write <route>/index.html so /<route>/ answers 200 instead of a 404
  // that bounces through 404.html (#70). Pages still serves /<route> from
  // <route>.html with no redirect when both exist (checked live on /projects).
  write(`${rel}/index.html`, html);
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((r) => `  <url><loc>${escapeHtml(urlFor(r.path))}</loc></url>`),
  '</urlset>',
  '',
].join('\n');
write('sitemap.xml', sitemap);

if (!existsSync(join(buildDir, '404.html'))) {
  throw new Error('spa-routes: build/404.html is missing; unknown paths would lose the SPA redirect');
}
