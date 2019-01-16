// ## Webpack middlewares configuration
//
// Enable the use of Webpack (babel and HMR) in development environment only
// NB : transpiled files are stocked into RAM (public files won't be created)
const init = app => {
  const webpack = require('webpack')
  const config = require('../webpack/conf.dev.js')
  const webpackDev = require('koa-webpack-dev-middleware')
  const webpackHot = require('koa-webpack-hot-middleware')

  const compiler = webpack(config)
  const wpmw = webpackDev(compiler, {
    hot: true,
    publicPath: config.output.publicPath,
    contentBase: 'assets',
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: true
    },
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  })

  const wphmw = webpackHot(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 1 * 1000
  })
  app.use(wpmw)
  app.use(wphmw)
}

module.exports = init
