// template for server:-
// const http = require('http');
// http.createServer((req, resp)=>{}).listen(4800);


const http = require('http');
    http.createServer((req, resp)=>{
        resp.write("<h1>Hello Ashish</h1>");
        resp.end('Hello World');
    }).listen(4800);


   
    http.createServer((req, resp)=>{
        resp.write("<h1>Other Server</h1>");
        resp.end('Hello World');
    }).listen(5800);

