//without class
var userOne = { firstName: "Alice", lastName: "Bob", age: 24 };
var userTwo = { firstName: "Alice", lastName: "Immanuel", age: 24 };
function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function getUserAge(user) {
    return user.age;
}
console.log(greetUser(userOne));
console.log(getUserAge(userOne));
console.log(greetUser(userTwo));
console.log(getUserAge(userTwo));
