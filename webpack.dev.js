const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin"); // serve your webpack bundles (with hash file names)
const { merge } = require("webpack-merge"); // allows us to merge configs with "webpack.common.js"
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
  module: {
    rules: [
      {
        test: /\.scss$/, // regex that catches any file ending in "scss"
        // take not that order is reversed here
        use: [
          // we don't extract into CSS file in dev because it takes a while to change those files
          "style-loader", // 3 inject styles into DOM
          "css-loader", // 2. turns css into CommonJS
          "sass-loader", // 1. turns sass into css
        ],
      },
    ],
  },
  // plugins is an array that contains as many plugins as we want
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/template.html",
      // filename: "./index.html", // this is default name anyway
    }),
  ],
});
