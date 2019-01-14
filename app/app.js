const path = require('path')
// Webpack middleware (HMR feature)
const wp = require('./webpack')
// Koa middlewares
const Koa = require('koa')
const serve = require('koa-static')

// Logger
const app = new Koa()

// Init webpack middlewares in development environment
wp(app)

app.use(serve(path.resolve('dist/development')))

module.exports = app
