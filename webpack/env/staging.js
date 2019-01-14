// Load frontend environment variables.
const locale = process.env.LOCALE || 'fr'
const path = require('path')
const localeKeys = require(path.resolve(`config/locales/${locale}.json`))

const env = () => {
  return {
    '_ENV_': JSON.stringify('staging')
  }
}

module.exports = env
