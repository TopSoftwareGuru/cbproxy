const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  mode: "development",
  target: "web",
  node: {
    fs: "empty",
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css|scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: "file-loader",
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      },
      // {
      //   test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: "fonts/[name].[ext]",
      //     }
      //   }
      // }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
  ]
};
