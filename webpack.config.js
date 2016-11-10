const extractTextPlugin = require('extract-text-webpack-plugin');
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
    path: path.resolve() + '/static',
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

  resolve: {
    extensions: [
      '', '.scss', '.js', '.json', '.md'
    ],
    packageMains: [
      'browser', 'web', 'browserify', 'main', 'style'
    ],
    modulesDirectories: [
      'node_modules',
      path.resolve() + './node_modules'
    ]
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
        test: /\.(scss|css)$/,
        include: /components\//,
        loader: extractTextPlugin.extract('style',
          'css?sourceMap&modules&importLoaders=1&' +
          'localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'
        )
      },
      {
        test: /\.(scss|css)$/,
        exclude: /components\//,
        loader: extractTextPlugin.extract('style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[local]!postcss!sass?sourceMap'
        )
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },

  plugins: [
    new extractTextPlugin('styles.css', {allChunks: true}),
    new webpack.HotModuleReplacementPlugin()
  ]
};
