const http = require('http')

const svr = http.createServer(
    (req, res) => {
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>Hello World</h1>')
    }
)

svr.listen(8081)