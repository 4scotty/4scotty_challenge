// Load frontend environment variables.
const locale = process.env.LOCALE || 'fr'
const path = require('path')

const env = () => {
  return {
    '_ENV_': JSON.stringify('production'),
  }
}

module.exports = env
