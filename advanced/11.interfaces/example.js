/* function greetUser(user: {firstName:string, lastName:string}) {
    return `Hello ${user.firstName} ${user.lastName}`;
}

function loginDetails(user: {firstName:string, lastName:string, age:number}) {
    console.log(`User: ${user.firstName} ${user.lastName}, age:${user.age}`);
} */
function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function loginDetails(user) {
    console.log("User: ".concat(user.firstName, " ").concat(user.lastName, ", age:").concat(user.age));
}
var user1 = { firstName: "alice", lastName: "immanuel", age: 24 };
console.log(greetUser(user1));
console.log(loginDetails(user1));
