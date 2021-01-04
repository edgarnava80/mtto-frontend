const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader"
  }
]

module.exports = {
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
