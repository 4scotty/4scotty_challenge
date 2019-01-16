const fs = require('fs')
const revHash = require('rev-hash')
const env = process.env.NODE_ENV

const getFiles = () => {
  return fs.readdirSync('./dist/production/css/')
}

const saveFileWitHash = fileName => {
  const filePath = `./dist/production/css/${fileName}`
  // 1 - Read files and compute associated hash.
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      // 2 - Compute hash.
      const hash = revHash(data)
      const chunkedFilePath = `./dist/production/css/${
        fileName.split('.')[0]
      }.${hash}.css`
      // 3 - Save file, with chunked name.
      fs.writeFile(chunkedFilePath, data, err => {
        if (err) console.log(err)
      })
    }
  })
}

const main = () => {
  // 1 - Get list of css files.
  const files = getFiles()
  // 2 - For each file, compute associated hash and save an
  // associated chunked file in public folder.
  files.forEach(fileName => saveFileWitHash(fileName))
}

main()
