const env = process.env.NODE_ENV || 'staging'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const sharedConf = require('./shared')
const entries = require('./entries')
const envFile = require(`./env/${env}`)
var fs = require('fs')
const _ = require('lodash')

let configs = []

const getStylesAssets = () => {
  return fs.readdirSync(path.resolve(`dist/${env}/css/`))
}

for (let fileName in entries) {
  let config = _.assign({}, sharedConf, {
    entry: {},
    output: {
      path: path.resolve(`dist/${env}`),
      publicPath: '/',
      filename: `js/[name].[chunkhash].min.js`
    },
    plugins: [
      new UglifyJSPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        filename: `${fileName}.html`,
        template: path.resolve('src/template/index.html')
      }),
      new webpack.DefinePlugin(envFile()),
      new HtmlWebpackIncludeAssetsPlugin({
        assets: getStylesAssets().map(fileName => `css/${fileName}`),
        append: true
      })
    ]
  })
  config.entry[fileName] = entries[fileName]
  configs.push(config)
}

module.exports = configs
