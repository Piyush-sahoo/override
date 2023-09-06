const http = require('http');

const port = process.env.PORT || 8008;

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(req.url == '/'){
        
    }

})