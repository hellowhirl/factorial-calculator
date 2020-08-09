const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development", // then we can read all our code in a readable bundle (not uglified)
  // devtool: "none", // to clean up our main.js and make readable
  entry: "./src/index.js", // webpack behavior
  output: {
    filename: "main.js", // this is also default webpack behavior
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // order is reversed here
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
    }),
  ],
};
