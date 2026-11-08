console.log("apple1");

setTimeout(()=>{
console.log("apple2");
},2000);

console.log("apple3");

// -----------read file async------
// const fs = require('fs');
// fs.readFile("text/sanju.txt", "utf-8",(error,data)=> {
//     if(error){
//         return false
//     }
//     console.log(data);

// })

// console.log("end script")

// -----------read file synchronus--------
const fs = require('fs');
const data = fs.readFileSync("text/sanju.txt","utf-8");
console.log(data);
console.log("end task");