const {createServer} = require('http')

createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hello World')
}).listen(4005,'localhost')