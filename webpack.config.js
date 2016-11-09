const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(),
  devtool: 'inline-source-map',
  entry: {
    app: [
      './index.js'
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve() + '/dist',
    publicPath: '/static/'
  },

  devServer: {
    inline: true,
    colors: true,
    publicPath: '/static',
    contentBase: './',
    port: 3000,
    host: '0.0.0.0'
  },

  module: {
    loaders: [
      {
        test: /\.(jpg|jpeg|png|eot|ttf|woff|svg|less)/,
        loader: 'file'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        include: path.resolve(),
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
