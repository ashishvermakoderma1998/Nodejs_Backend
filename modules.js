
const {log,warn} = require('console');
// --------core module--------
const fs = require('fs');
const os = require('os');
fs.writeFileSync('dummy.txt', 'Hello, World!');
console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());

// ---------global objects---------

console.log("abc");
console.log(process.cwd());
console.log(process.pid);
console.log(process.version);
// ----custom------
log("this is log");
warn(  "this is warn");  

// -------video6-------