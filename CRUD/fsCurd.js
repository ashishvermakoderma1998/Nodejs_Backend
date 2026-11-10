const fs = require('fs');

// ----------create file------------
fs.writeFileSync("files/veg.txt", "this is a fruit");

// --------delete file----------
// fs.unlinkSync("files/banana.txt");


// ----------read file-----------

// const data = fs.readFileSync('/files/apple.txt',"utf-8");
// console.log(data);

// -----------update file------------