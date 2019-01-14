// # Server
require('dotenv').config()
const app = require('./app/app')
const _ = require('lodash')

const listener = app.listen(process.env.PORT, () => {
  console.log(
    `Development server is starting on port ${process.env.PORT}`
  )
})
