var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
    filename: 'bundle-[chunkhash].js',
    chunkFilename: '[id]-bundle-[chunkhash].js'
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'web_modules')],
    extensions: ['.web.js', '.js', '.json'],
  },
  module: {
    loaders: [
      {test: /\.js/, exclude: /node_modules/, loader: 'babel-loader?cacheDirectory'}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/vendor-manifest.json')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      dev: false,
      favicon:'./favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        minifyURLs: true,
        minifyCSS: true
      },
      filename: 'index.html',
      template: './index.ejs'
    })
  ]
};
