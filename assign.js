const fs = require('fs')
const csv = require('csvtojson')
const path = require('path')


var filePath = path.join(__dirname, "customer-data.csv")
  csv().fromFile(filePath).then((jsonObj) => {
  fs.writeFileSync(path.join(__dirname, 'customer-data.json'),JSON.stringify(jsonObj,null,4))
})
console.log('Conversion Successfull');
