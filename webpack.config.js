var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'web_modules')],
    extensions: ['.web.js', '.js', '.json'],
    alias: {
      fetch: 'whatwg-fetch/fetch.js'
    }
  },
  module: {
    loaders: [
      { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader?cacheDirectory' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true
    }),
    new HtmlWebpackPlugin({
      dev: true,
      favicon: './favicon.ico',
      filename: 'index.html',
      template: './index.ejs'
    })
  ]
}