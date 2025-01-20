const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.end('Hello, this is a Node.js HTTP server!');

  // res.writeHead(200, { 'Content-Type': 'text/plain' })
  // res.end("Hello Js")

  const path = req.url
  const method = req.method

  // console.log(new Date(), path, method);

  if (path.includes('/abc') && method == 'GET') {
    res.end('Hello Js')
  } else if (path.includes('file') && method == 'GET') {
    const fileName = path.split('/').pop()
    const data = fs.readFileSync('./' + fileName)
    return res.end(data)
  } else {
    res.end('Jelin Bolival')
  }
})

server.listen(7500, () => {
  console.log('server')
})
