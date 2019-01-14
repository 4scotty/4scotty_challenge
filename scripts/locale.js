// Script enabling YAML to JSON translation.
//
const path = require('path')
const yaml = require('js-yaml')
const fs = require('fs')
const conversion = async () => {
  // Language ISO code (input as argument).
  const locale = process.env.LOCALE || 'fr'
  // Read and convert keys into JSON format.
  let jsonKeys = await yaml.safeLoad(
    fs.readFileSync(path.resolve(`config/locales/${locale}.yml`), 'utf8')
  )
  // Create (or over-write) on JSON keys file.
  return fs.writeFileSync(
    path.resolve(`config/locales/${locale}.json`),
    JSON.stringify(jsonKeys),
    'utf8'
  )
}

conversion()
