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
};
