const fs = require('fs')
const path = require('path')

function makeDir(dirName, callback, targetDir = 'sql') {
  const dirPath = path.join(__dirname, '..', targetDir, dirName)

  console.log(path.join(targetDir, dirName), 'ready!')

  if (!fs.existsSync(dirPath)) {
    fs.mkdir(dirPath, err => {
      if (err) throw err
    })
  }

  callback()
}

module.exports = makeDir
