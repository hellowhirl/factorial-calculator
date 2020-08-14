const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin"); // serve your webpack bundles (with hash file names)
const { merge } = require("webpack-merge"); // allows us to merge configs with "webpack.common.js"
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsplugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); // efault minimizer for js files in webpack

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[hash].js", // this is also default webpack behavior
    path: path.resolve(__dirname, "dist"), // resolves an absolute path to the "dist" directory (not hard coded)
  },
  optimization: {
    // only minifying in production
    minimizer: [new OptimizeCssAssetsplugin(), new TerserPlugin()], // adding Terser back in after overriding it before
  },
  // plugins is an array that contains as many plugins as we want
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
    new HtmlWebPackPlugin({
      template: "./src/template.html",
      // filename: "./index.html", // this is default name anyway
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/, // regex that catches any file ending in "scss"
        // take not that order is reversed here
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract CSS into files ('loader' is used at end of loaders list)
          "css-loader", // 2. turns css into CommonJS
          "sass-loader", // 1. turns sass into css
        ],
      },
    ],
  },
});
