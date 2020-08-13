const HtmlWebPackPlugin = require("html-webpack-plugin"); // serve your webpack bundles (with hash file names)
const path = require("path");

module.exports = {
  entry: "./src/index.js", // webpack default behavior
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            // options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss$/, // regex that catches any file ending in "scss"
        // take not that order is reversed here
        use: [
          "style-loader", // 3 inject styles into DOM
          "css-loader", // 2. turns css into CommonJS
          "sass-loader", // 1. turns sass into css
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "imgs",
            },
          },
        ],
      },
      {
        test: /\.ttf$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false,
            },
          },
        ],
      },
    ],
  },
  // plugins is an array that contains as many plugins as we want
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/template.html",
      filename: "./index.html", // this is default name anyway
    }),
  ],
};
