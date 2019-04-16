const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle-back.js",
  },
  mode: "production",
  externals: [nodeExternals()],
}