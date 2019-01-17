const _ = require('lodash')
const path = require('path')

const Koa = require('koa')
const serve = require('koa-static')

// Webpack middleware (HMR feature)
const wp = require('./webpack')
const app = new Koa()
wp(app)
app.use(serve(path.resolve('dist/development')))

const port = 3036

const listener = app.listen(port, () => {
  console.log(
    `Development server is starting on port ${port}`
  )
})
