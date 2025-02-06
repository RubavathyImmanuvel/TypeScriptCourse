interface User {
    firstName: string;
    lastName: string;
    age?: number; //optional field
}

/* function greetUser(user: {firstName:string, lastName:string}) {
    return `Hello ${user.firstName} ${user.lastName}`;
}

function loginDetails(user: {firstName:string, lastName:string, age:number}) {
    console.log(`User: ${user.firstName} ${user.lastName}, age:${user.age}`);
} */

function greetUser(user: User) {
    return `Hello ${user.firstName} ${user.lastName}`;
}

function loginDetails(user: User) {
    console.log(`User: ${user.firstName} ${user.lastName}, age:${user.age}`);
}

let user1 = {firstName:"alice", lastName:"immanuel", age:24};

console.log(greetUser(user1));
console.log(loginDetails(user1));