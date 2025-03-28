const fs = require('fs')
const path = require('path')

function makeFile(dir, fileName, fileContent, api = 'api') {
  const filePath = path.join(__dirname, '..', api, dir, fileName)
  fileContent = fileContent.replace(/\r\n/g, '\n')
  fs.writeFile(filePath, fileContent, { flag: 'wx' }, err => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.log(`file ${fileName} already exists...`)
        return
      } else {
        throw err
      }
    }
    console.log(`file ${fileName} created!`)
  })
}

module.exports = makeFile
