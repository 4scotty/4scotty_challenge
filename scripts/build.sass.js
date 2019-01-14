const sass = require('node-sass')
const path = require('path')
const revHash = require('rev-hash')
const fs = require('fs')

const nodeEnv = process.env.NODE_ENV || 'development'

const cssRawFileName = 'app.css'
const projectPath = path.dirname(__dirname)

const paths = {
  entry: path.join(projectPath, 'src/stylesheets/app.scss'),
  destDir: path.join(projectPath, `dist/${nodeEnv}/css`)
}

const developmentOutputFileName = cssString => cssRawFileName

const productionOutputFileName = cssString => {
  // let hash = revHash(cssString)
  return `app.css`
}

const outFileNames = {
  development: developmentOutputFileName,
  production: productionOutputFileName
}

const options = {
  production: {
    file: paths.entry,
    outputStyle: 'compressed',
    includePaths: ['node_modules']
  },
  development: {
    file: paths.entry,
    outFile: path.join(paths.destDir, developmentOutputFileName()),
    outputStyle: 'expanded',
    sourceMap: true,
    includePaths: ['node_modules']
  }
}

const writeSourceMapFile = map => {
  fs.writeFile(`${options.development.outFile}.map`, map, err => {
    if (err) {
      console.log('error writing css source map file to disk')
      console.log(err)
    }
  })
}

sass.render(options[nodeEnv], (error, result) => {
  if (!error) {
    // No errors during the compilation, write this result on the disk
    let outputFileName = outFileNames[nodeEnv](result.css)

    fs.writeFile(path.join(paths.destDir, outputFileName), result.css, err => {
      if (err) {
        console.log('error writing css file to disk')
        console.log(err)
      }
    })
    if (nodeEnv === 'development') {
      writeSourceMapFile(result.map)
    }
  } else {
    console.log('error processing sass css')
    console.log(error)
  }
})
