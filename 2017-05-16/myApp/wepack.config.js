var webpack = require('webpack') // create a variable for accessing webpack inside the object below
var HtmlWebpackPlugin = require('html-webpack-plugin'); // pull in the html-webpack-plugin module

module.exports = {
  entry: [
  'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  './app/index' // App entry point
  ],
  output: {
    path: __dirname + 'dist',
    filename: 'index.js'
  },

  module: {
    loaders: [
      { test: [/\.js$/,/\.jsx$/], exclude: /node_modules/, loader: 'babel' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'] // resolve all js extensions
  },

   devServer: {
    port: 3000,
    contentBase: './dist',
    colors: true,
    inline: true
  },

  plugins: [
    // Use HTML webpack plugin to generate a template from ./app/index.html
    new HtmlWebpackPlugin({
     filename: 'index.html',
     template: './app/index.html',
     inject: 'body'
   }),
    new webpack.HotModuleReplacementPlugin() // use Hot Module Replacement for React components
  ]
};