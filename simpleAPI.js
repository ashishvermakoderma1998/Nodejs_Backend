const http = require('http');

const usersData = [
    {
        name:"Ashish Verma",
        age: 25,
        email: "ashish@gmail.com"
    },
        {
        name:"Suraj",
        age: 25,
        email: "suraj@gmail.com"
    },
        {
        name:"chandan",
        age: 25,
        email: "chandan@gmail.com"
    },
        {
        name:"ravindar",
        age: 24,
        email: "ravindar@gmail.com"
    },
        {
        name:"rahul gupta",
        age: 28,
        email: "rahul@gmail.com"
    },
]
http.createServer((req, resp)=>{
resp.setHeader("Content-Type", "application/json");
resp.write(JSON.stringify(usersData));
resp.end();

}).listen(6100)