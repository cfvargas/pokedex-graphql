'use strict'

const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.sass'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'src')
        ],
        exclude: [
          path.join(__dirname, 'node-modules')
        ],
        loader: 'babel-loader'
      }
    ]
  }
}
