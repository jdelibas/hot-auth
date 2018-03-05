'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const app = path.join(__dirname, 'app')
const src = path.join(app, 'src')
const main = path.join(src, 'main')
const client = path.join(src, 'client')
const dist = path.join(app, 'dist')

module.exports = [
  {
    devtool: 'source-map',
    entry: [
      'babel-polyfill',
      path.join(main, 'main.js')
    ],
    output: {
      path: dist,
      filename: '[name].js'
    },
    node: {
      __dirname: false,
      __filename: false
    },
    target: 'electron',
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
  }, {
    devtool: 'source-map',
    entry: [
      'babel-polyfill',
      path.join(client, 'index.js')
    ],
    output: {
      path: dist,
      filename: 'client.js'
    },
    target: 'electron-renderer',
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(client, 'index.tpl.html'),
        inject: 'body',
        filename: 'index.html'
      })
    ],
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
            plugins: [
              'transform-async-to-generator',
              'transform-object-rest-spread'
            ]
          }
        },
        { test: /(\.css)$/, loaders: ['style-loader', 'css-loader'] },
        { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
        { test: /\.json$/, loader: 'json-loader' }
      ]
    }
  }
]
