const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const JS_BASEURL = "./src/frontend/js/";
module.exports = {
  mode: "development",
  entry: {
    main: JS_BASEURL + "main.js",
    videoPlayer: JS_BASEURL + "videoPlayer.js",
    comment: JS_BASEURL + "comment.js",
  },
  watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
