const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: "bundle.min.js",
    path: path.join(__dirname, "dist")
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" 
      },
      { 
        test : /\.jpg$/,
        exclude: /node_modules/,
        loader : 'file-loader'
      },
      { 
        enforce: "pre", 
        test: /\.js$/, 
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html') }),
  ],
};