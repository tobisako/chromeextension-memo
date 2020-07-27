const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // .CleanWebpackPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

var fileExtensions = ["jpg", "jpeg", "png", "gif", "eot", "otf", "svg", "ttf"];

var options = {
  entry: {
    background: path.join(__dirname, "src", "js", "background.js"),
  },
  output: {
    globalObject: "self",
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: new RegExp(".(" + fileExtensions.join("|") + ")$"),
        loader: "file-loader?name=[name].[ext]",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "./src/crate"),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "background.html"),
      filename: "background.html",
      chunks: ["background"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/manifest.json",
          transform: function (content, path) {
            // generates the manifest file using the package.json informations
            return Buffer.from(
              JSON.stringify({
                description: process.env.npm_package_description,
                version: process.env.npm_package_version,
                ...JSON.parse(content.toString()),
              })
            );
          },
          to: "manifest.json",
        },
      ],
    }),
    new WriteFilePlugin(),
  ],
};

module.exports = options;
