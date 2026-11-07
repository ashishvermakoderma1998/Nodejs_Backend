// const data = require('./data.js');
const {userName} = require('./data.js');
console.log(userName);

// -------variable---------
var a =10;
let b = 20;
const c = 20;
a = 100;
b = 200;
console.log(a+b+c)

// ----------condition----------
if(a==100){
    console.log("this is if condition");
}
else{
console.log('this is else condition')
}


// --------function----------
function fruit(item){
console.log("this is" +item);
}

fruit("mango");

// ----------loop-----------

for(var a=0; a<=10; a++){
    console.log(a)
}

var d= 0;
while(d<=20){
    console.log("while "+d)
    d++;
    
}

// ------------array----------
var users = ["Ashish", "Ramesh", "Suresh", "Mahesh"];
console.log(users[0]);

for(var i=0; i<users.length; i++){
    console.log(users[i])
}

// ------------objects------------
var employee = {
    name: "Ashish",
    age: 25,
    designation: "Software Engineer"
}
console.log(employee);
console.log(employee.name);



