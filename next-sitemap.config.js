/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://technocrazy.org",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/privado", "/privado/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/privado"] },
    ],
  },
};
