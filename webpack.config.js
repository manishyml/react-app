const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
module.exports = {
  entry: `./src/index.js`,
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [new htmlwebpackplugin({ template: "./src/index.html" })]
};
