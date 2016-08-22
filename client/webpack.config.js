var config = module.exports = {};
var webpack = require('webpack');
var WebpackBrowserPlugin = require('webpack-browser-plugin');
var path = require('path');
var argv = require('yargs').argv;

config.plugins = [];
config.plugins.push(new WebpackBrowserPlugin());
var dest;
if (argv.prod) {
  dest = path.join(__dirname, 'dist');
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: true,
    output: {
      comments: false
    }
  }));
} else {
  dest = path.join(__dirname, '.tmp');
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: ['app', 'vendor', 'polyfill', 'head']
  }));
}

config.debug = !!argv.debug;
config.context = __dirname;
config.devtool = 'source-map';

config.devServer = {
  historyApiFallback: true,
  port: 9000,
  contentBase: path.join('./src/')
};

config.node = {
  fs: "empty"
};
config.entry = {
  app: path.join('./src/app/main.ts'),
  head: path.join('./src/app/head.js'),
  polyfill: path.join('./src/app/polyfill.ts'),
  vendor: path.join('./src/app/vendor.ts')
};

config.output = {
  path: dest,
  filename: '[name].js'
};

config.resolve = {
  alias: {
    'es6-shim': path.join(__dirname, '/node_modules/es6-shim/es6-shim.js')
  },
  root: __dirname,
  extensions: ['', '.ts', '.tsx', '.js', '.json', '.html']
};

config.resolveLoader = {
  root: path.join(__dirname, 'node_modules')
};

config.module = {};
config.module.loaders = require('./webpack/loaders');

require('./webpack/build-index');