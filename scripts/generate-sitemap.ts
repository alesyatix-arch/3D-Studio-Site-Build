import { SITE_URL, STATIC_SITE_PATHS } from "../src/lib/site-url";

const urls = STATIC_SITE_PATHS.map(
  (path) =>
    `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`,
).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

await Bun.write("public/sitemap.xml", sitemap);
