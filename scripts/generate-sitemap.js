// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const { Readable } = require("stream");

// 1) Your production domain:
const hostname = "https://www.encurage.app";

// 2) List all of your routes here.
//    For dynamic routes (e.g. products/:id), fetch their IDs from your data source.
const staticUrls = [
  { url: "/", changefreq: "yearly", priority: 0.6 },
  { url: "/ChildMedicationManagement", changefreq: "yearly", priority: 0.6 },
  { url: "/MedicationManagementTools", changefreq: "yearly", priority: 0.6 },
  { url: "/OurStory", changefreq: "yearly", priority: 0.6 },
  { url: "/Reviews", changefreq: "yearly", priority: 0.6 },
  { url: "/helpcenter", changefreq: "yearly", priority: 0.6 },
  { url: "/helpcenter/Contact", changefreq: "yearly", priority: 0.6 },
  { url: "/helpcenter/Faq", changefreq: "yearly", priority: 0.6 },
  { url: "/helpcenter/Terms", changefreq: "yearly", priority: 0.6 },
  { url: "/helpcenter/Privacy", changefreq: "yearly", priority: 0.6 },
  { url: "/helpcenter/DataPolicy", changefreq: "yearly", priority: 0.6 },
];

// Example dynamic fetch (uncomment & adapt if needed):
// const fetch = require('node-fetch');
// async function getDynamicUrls() {
//   const res = await fetch('https://api.yoursite.com/products');
//   const items = await res.json();
//   return items.map(p => ({
//     url: `/product/${p.id}`,
//     changefreq: 'weekly',
//     priority: 0.7,
//   }));
// }

async function build() {
  // If you have dynamic routes, merge them here:
  const dynamicUrls = []; // await getDynamicUrls();
  const allUrls = [...staticUrls, ...dynamicUrls];

  // 3) Create a stream to write to public/sitemap.xml
  const stream = new SitemapStream({ hostname });
  const writeStream = createWriteStream("public/sitemap.xml");

  // Pipe your URLs into the sitemap stream, then to the file
  Readable.from(allUrls).pipe(stream).pipe(writeStream);

  // Wait for it to finish
  await streamToPromise(stream);
  console.log("✅ sitemap.xml generated at public/sitemap.xml");
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
