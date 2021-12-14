const { override, addWebpackAlias, addWebpackPlugin } = require("customize-cra");
const { InjectManifest } = require("workbox-webpack-plugin");
const path = require("path");

module.exports = override(
   addWebpackAlias({
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@context": path.resolve(__dirname, "src/context"),
      "@styles": path.resolve(__dirname, "src/assets/styles"),
   }),
   addWebpackPlugin(
      new InjectManifest({
         swSrc: "./src/sw.js",
         swDest: "./sw.js",
      })
   )
);