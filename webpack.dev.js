const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development", // "development" - then we can read all our code in a readable bundle (not uglified)
  // devtool: "none", // to clean up our main.js and make readable
  output: {
    filename: "main.js", // this is also default webpack behavior
    path: path.resolve(__dirname, "dist"), // resolves an absolute path to the "dist" directory (not hard coded)
  },
  // when we use webpack-dev-server it doesn't create files in a dist/ folder, everything is stored in memory
  devServer: {
    open: true,
    hot: true,
  },
});
