var jsonData = '{ "name":"Alice", "age":30 }';
var user11 = JSON.parse(jsonData); //type-casting
//console.log(`Name ${user11.name}, Age ${user11.age}, Email ${user11.email}`); //error
console.log("Name ".concat(user11.name, ", Age ").concat(user11.age));
