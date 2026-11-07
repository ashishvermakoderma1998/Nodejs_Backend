const http = require('http');


const age = 29;
const server = http.createServer((req, resp) => {
    resp.setHeader('Content-Type', 'text/html');
    resp.write(`
        <html>
        <head>
        <title>webpage</title>
        </head>
        <body>
        <h1>Hello Ashish</h1>
        <h2>My age is ${age}</h2>
        <h1>`+age+`</h1>
        <h1>`+ new Date() +`</h1>
        
        </body>
        
        </html>

        
        `);
    resp.end();
    // for end request:-
    // process.exit();
})

server.listen(4800);