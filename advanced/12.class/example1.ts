//without class
let userOne = { firstName:"Alice", lastName:"Bob", age:24 };
let userTwo = { firstName:"Alice", lastName:"Immanuel", age:24 };

function greetUser(user: {firstName:string, lastName:string}) {
    return `Hello ${ user.firstName} ${user.lastName}`;
}

function getUserAge(user: {age:number}) {
    return user.age;
}

console.log(greetUser(userOne));
console.log(getUserAge(userOne));

console.log(greetUser(userTwo));
console.log(getUserAge(userTwo));