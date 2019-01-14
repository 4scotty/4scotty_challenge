const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const sharedConf = require('./shared')
const entries = require('./entries')
const envFile = require('./env/development')

// Configure HMR for each entry (enable in dev environment only).
for (var key in entries) {
  if (entries.hasOwnProperty(key)) {
    entries[key].push('webpack-hot-middleware/client?reload=true')
  }
}

module.exports = Object.assign(sharedConf, {
  entry: entries,
  devtool: 'source-map',
  output: {
    path: path.resolve('dist/development/js'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.resolve('src/template/index.html')
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin(envFile())
  ]
})
