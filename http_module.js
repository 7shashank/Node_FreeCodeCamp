const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('Hello World!')
    }
    else if (req.url === '/about'){
        res.end('This is my first server...')
    }
    else {
        res.end(`
        <h1>Wrong URL. Please go to</h1>
        <a href="/"> Home </a>
        `)
    }
})

server.listen(8080)