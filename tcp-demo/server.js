'use strict'

const net = require('net')

net.createServer((conn) => {
  console.log('client connected!')
  conn.on('end', () => {
    console.log('客户端关闭连接')
  })
  conn.write('hello, world\n')
  conn.pipe(conn)
}).listen(8080, () => {
  console.log('net server is listening 8080')
})