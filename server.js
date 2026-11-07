// template for server:-
// const http = require('http');
// http.createServer((req, resp)=>{}).listen(4800);


const http = require('http');
    http.createServer((req, resp)=>{
        resp.write("<h1>Hello World</h1>");
        resp.end('Hello World');
    }).listen(4800);

