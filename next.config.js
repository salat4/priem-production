const withVideos = require("next-videos");
const withPlugins = require("next-compose-plugins");
const path = require("path");

module.exports = withPlugins([withVideos], {
  images: {
    domains: [`ibb.co`, "i.ibb.co", "i.vimeocdn.com", "res.cloudinary.com"],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
});
