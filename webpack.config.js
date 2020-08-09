const HtmlWebPackPlugin = require("html-webpack-plugin");
// const path = require("path");

module.exports = {
  mode: "development",
  // entry: "./src/index.js",
  // output: {
  //   filename: "main.js",
  //   path: path.resolve(__dirname, "dist"),
  // },
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
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
