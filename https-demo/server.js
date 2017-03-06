
const fs = require('fs')
// const http = require('http')
const https = require('https')
const app = require('koa')()

const credentials = {
  key: fs.readFileSync('./host.key', 'utf8'),
  cert: fs.readFileSync('./host.cert', 'utf8')
}

app.use(function * () {
  this.body = {success: true}
})

https.createServer(credentials, app.callback()).listen(8443, () => {
  console.log('HTTPS server listening 8443')
})
