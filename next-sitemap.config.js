/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://technocrazy.org",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/privado", "/privado/*", "/admin", "/admin/*", "/api/*", "/c/*", "/icon", "/apple-icon"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/privado", "/admin", "/api", "/c/"] },
    ],
  },
};
