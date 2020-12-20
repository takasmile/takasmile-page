const path = require("path");
const fs = require("fs");

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  lintOnSave: false,
  publicPath: "/",
  outputDir: path.resolve(__dirname, "../dist"),
  configureWebpack: {
    resolve: {
      alias: {
        "/": "@",
      },
    },
    devtool: "source-map",
  },
};
