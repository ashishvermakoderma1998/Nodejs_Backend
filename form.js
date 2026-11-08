// const http = require('http');

// http.createServer((req, resp)=>{
//     resp.writeHead(200, {"content-type": "text/html"});

//     if(req.url == '/'){
//         resp.write(`
//         <form action="/submit"method="post" >
//         <input type="text" placeholder="Enter your name" name="name" />
//         <input type="text" placeholder="Enter your email" name="email" />
//         <button >submit</button>
//         </form>
//         `);
//     }else if (req.url =='/submit') {
//         resp.write('<h1>form submitted</h1>');
//     }

//     resp.end();
// }).listen(3200);

// import code from html file

const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

http
  .createServer((req, resp) => {
    fs.readFile("html/form.html", "utf-8", (error, data) => {
      if (error) {
        resp.writeHead(500, { "content-type": "text/plain" });
        resp.end("internal server error");
      }

      resp.writeHead(200, { "content-type": "text/html" });
      if (req.url == "/") {
        resp.write(data);
      } else if (req.url == "/submit") {
        // ------------get submited data in node js---------
        let dataBody = [];
        req.on("data", (chunk) => {
          dataBody.push(chunk);
        });
        req.on("end", () => {
          let rawData = Buffer.concat(dataBody).toString();
          let readableData = querystring.parse(rawData);
          let dataString = "My name is "+readableData.name+ " and my email id is "+readableData.email;
          // -----------end get submited data code---------

          // --------create file for submited data sync---------
          // console.log(dataString);
          // fs.writeFileSync('text/'+readableData.name+".txt",dataString);
          // console.log("file created");

          // --------create file for submited data async---------
          fs.writeFile('text/'+readableData.name+".txt",dataString,'utf-8',(err)=>{
            if(err){
              resp.end("internal server error")
              return false;
            }else{
              console.log("file created");
            }
          });

        });
        
        resp.write("<h1>form submitted</h1>");
      }
      resp.end();
    });
  })
  .listen(3200);
