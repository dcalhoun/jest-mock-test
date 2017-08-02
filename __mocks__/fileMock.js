// Mock every media file to return its filename to emulate the url that
// Webpack provides via the file-loader
const path = require('path')

module.exports = {
  process: (_, filename) => (
    `module.exports = '${JSON.stringify(path.basename(filename))}'`
  )
}
