const path = require("path");

const Dotenv = require("dotenv-webpack");
const runtimeCaching = require("next-pwa/cache");

// const { i18n } = require("./next-i18next.config");

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   runtimeCaching,
//   disableDevLogs: true,
//   disable: process.env.NODE_ENV === "development",
//   sw: "service-worker.js",
//   buildExcludes: [/middleware-manifest.json$/],
// });

module.exports = {
  productionBrowserSourceMaps: true,
  staticPageGenerationTimeout: 1000,
  publicRuntimeConfig: {
    apiUrl: "http://localhost:3000",
  },
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.optimization.providedExports = true;
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/theme/*": path.resolve(__dirname, "./src/theme/*.js"),
      "@/styles/*": path.resolve(__dirname, "./src/styles/*.js"),
      "@/hooks": path.resolve(__dirname, "./src/hooks/"),
      "@/layouts": path.resolve(__dirname, "./src/layouts/"),
      "@/constants": path.resolve(__dirname, "./src/constants/index.js"),
      "@/constants/*": path.resolve(__dirname, "./src/constants/*"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/translation": path.resolve(__dirname, "./src/translation/i18n.js"),
      "@/apis": path.resolve(__dirname, "./src/services/apis"),
      "@/apis/*": path.resolve(__dirname, "./src/services/apis/*.js"), // Add this line
      "@/storage": path.resolve(__dirname, "./src/services/storage"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/assets/*": path.resolve(__dirname, "./src/assets/*"),
    };
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
};
