/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://farmhousestudios.ca",
  generateRobotsTxt: true,            // (recommended) creates robots.txt
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  // optional: exclude specific routes
  //exclude: ["/secret", "/admin/*"],
  // optional robots txt customization
     transform: async (config, path) => {
    // Exclude Next.js system pages
    if (path === "/_next" || path.includes("404") || path.includes("500")) {
      return null;
    }
    return {
      loc: path, // use default path
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      // if you have alternate sitemaps, add them here
      // "https://yourdomain.com/special-sitemap.xml"
    ],
  },
};
