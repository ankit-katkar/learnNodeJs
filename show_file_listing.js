const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname, 'Files')
fs.writeFileSync(dirPath+'/demo.txt','this is a simple text file')
  