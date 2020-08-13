const HtmlWebPackPlugin = require("html-webpack-plugin"); // serve your webpack bundles (with hash file names)
const path = require("path");

module.exports = {
  mode: "development", // then we can read all our code in a readable bundle (not uglified)
  // devtool: "none", // to clean up our main.js and make readable
  entry: "./src/index.js", // webpack behavior
  output: {
    filename: "main.[hash].js", // this is also default webpack behavior
    path: path.resolve(__dirname, "dist"), // resolves an absolute path to the "dist" directory (not hard coded)
  },
  devServer: {
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
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
