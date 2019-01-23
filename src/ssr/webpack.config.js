const path = require("path");

const serverBundlePath = path.resolve(__dirname, "../../dist/js");
console.log("serverBundlePath:" + serverBundlePath);

module.exports = {
  node: {
    fs: "empty",
    module: "empty"
  },
  entry: "./server.js",
  output: {
    path: serverBundlePath,
    filename: "server-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
