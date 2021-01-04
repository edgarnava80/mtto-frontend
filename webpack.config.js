const currenTask = process.env.npm_lifecycle_event
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader"
  }
]

const config = {
  target: "web",
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  module: { rules },
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  devServer: {
    contentBase: "./",
    port: 5000
  }
}

if (currenTask == "build") {
  config.mode = "production"
}

module.exports = config
