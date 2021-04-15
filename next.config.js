const generateSitemap = require("./scripts/generate-sitemap");
//const generateRSS = require("./scripts/generate-rss");

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      generateSitemap();
    }
    return config;
  },
};
