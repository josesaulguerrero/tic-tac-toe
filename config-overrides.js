const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
   addWebpackAlias({
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@context": path.resolve(__dirname, "src/context"),
      "@styles": path.resolve(__dirname, "src/assets/styles"),
   })
);