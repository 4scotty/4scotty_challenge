const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
    alias: {
      Services: path.resolve('assets/js/services/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules\/.*/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    i18next: 'i18next'
  }
}
