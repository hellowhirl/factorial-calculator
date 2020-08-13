const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[hash].js", // this is also default webpack behavior
    path: path.resolve(__dirname, "dist"), // resolves an absolute path to the "dist" directory (not hard coded)
  },
  plugins: [new CleanWebpackPlugin()],
});
