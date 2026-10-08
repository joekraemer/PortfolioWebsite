// Checks the routing glue: src/routes.js, the titles it gives each page, and
// the per-route HTML files and sitemap.xml that scripts/spa-routes.mjs writes.
//
// Run with `npm test` (node --test, no extra dependencies). The build/ checks
// need `npm run build` first; they are skipped locally when build/ is missing
// and fail in CI.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes, pageTitle, titleFor, SITE, SITE_URL } from '../src/routes.js';

const buildDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'build');
const haveBuild = existsSync(join(buildDir, 'index.html'));
const needBuild = haveBuild
  ? {}
  : { skip: process.env.CI ? false : 'build/ missing; run `npm run build` first' };

const urlFor = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);
const fileFor = (path) => (path === '/' ? 'index.html' : `${path.slice(1)}.html`);
const unescapeHtml = (s) =>
  s.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

test('route paths are unique, lower-case and have no trailing slash', () => {
  const paths = routes.map((r) => r.path);
  assert.equal(new Set(paths).size, paths.length, 'duplicate route path');
  for (const path of paths) {
    assert.match(path, /^\/([a-z0-9-]+(\/[a-z0-9-]+)*)?$/, `bad route path ${path}`);
  }
});

test('every route has a title and a description', () => {
  for (const route of routes) {
    if (route.path === '/') {
      assert.equal(pageTitle(route), SITE);
    } else {
      assert.equal(typeof route.title, 'string', `${route.path} has no title`);
      assert.ok(route.title.trim(), `${route.path} has an empty title`);
    }
    assert.ok(route.description?.trim(), `${route.path} has no description`);
  }
});

test('titleFor matches paths the way React Router does', () => {
  assert.equal(titleFor('/Resume/'), 'Résumé · Joe Kraemer');
  assert.equal(titleFor('/'), SITE);
  assert.equal(titleFor('/no-such-page'), `Page not found · ${SITE}`);
});

test('build/ has <route>.html and <route>/index.html with the right title', needBuild, () => {
  for (const route of routes) {
    const files = [fileFor(route.path)];
    if (route.path !== '/') files.push(`${route.path.slice(1)}/index.html`);
    for (const file of files) {
      const target = join(buildDir, file);
      assert.ok(existsSync(target), `build/${file} is missing`);
      const title = readFileSync(target, 'utf8').match(/<title>([^<]*)<\/title>/)?.[1];
      assert.equal(title && unescapeHtml(title), pageTitle(route), `wrong <title> in build/${file}`);
    }
  }
});

test('build/sitemap.xml lists exactly the routes', needBuild, () => {
  const sitemap = readFileSync(join(buildDir, 'sitemap.xml'), 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => unescapeHtml(m[1]));
  assert.deepEqual(locs.sort(), routes.map((r) => urlFor(r.path)).sort());
});
