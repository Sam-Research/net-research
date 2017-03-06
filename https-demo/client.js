
const fs = require('fs')
// const path = require('path')
const request = require('request')

const req = request.defaults({
  key: fs.readFileSync('./host.key', 'utf8'),
  cert: fs.readFileSync('./host.cert', 'utf8'),
  strictSSL: false,
  rejectUnauthorized: false
})

const options = {
  url: 'https://localhost:8443'
}

req.get(options, (err, res, boby) => {
  console.log(err, res, boby)
})
