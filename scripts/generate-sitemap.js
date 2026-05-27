const fs = require('node:fs');
const path = require('node:path');
const { create } = require('xmlbuilder2');

const BASE_URL = 'https://svanesdyr.dk';
const APP_JS_PATH = path.join(__dirname, '..', 'src', 'App.js');
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Explicit list of thank-you / confirmation pages to exclude
const EXCLUDED_PATHS = new Set([
  '/hundehold/tusindtak',
  '/takkesideonlinekurser',
  '/kattensebog',
  '/eboginvestering',
  '/lydboginvestering',
  '/sommertak',
  '/tusindtak',
  '/webinarreaktivtiltak',
  '/webinartak',
]);

function isExcluded(routePath) {
  return EXCLUDED_PATHS.has(routePath);
}

function extractRoutes(appJsContent) {
  const routeRegex = /<Route[^>]+path="([^"]+)"/g;
  const routes = [];
  let match;

  while ((match = routeRegex.exec(appJsContent)) !== null) {
    const routePath = match[1];
    if (!isExcluded(routePath)) {
      routes.push(routePath);
    }
  }

  return routes;
}

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function generateSitemap(routes) {
  const lastmod = getToday();

  const root = create({ version: '1.0', encoding: 'UTF-8' }).ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
  });

  for (const routePath of routes) {
    const url = root.ele('url');
    url.ele('loc').txt(`${BASE_URL}${routePath}`);
    url.ele('lastmod').txt(lastmod);
  }

  return root.end({ prettyPrint: true });
}

function main() {
  const appJsContent = fs.readFileSync(APP_JS_PATH, 'utf-8');
  const routes = extractRoutes(appJsContent);

  console.log(`Found ${routes.length} routes to include in sitemap:`);
  for (const r of routes) {
    console.log(`  ${r}`);
  }

  const xml = generateSitemap(routes);
  fs.writeFileSync(OUTPUT_PATH, xml, 'utf-8');

  console.log(`\nSitemap written to ${OUTPUT_PATH}`);
}

main();
