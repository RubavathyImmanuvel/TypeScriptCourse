//without static properties
class User3 {
    name:string;

    constructor(name:string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let totalUsers = 0;

function createUser(name:string) { //tight couplin
    totalUsers++;
    return new User3(name);
}

const userAlice3 = createUser("Alice");
const userBob = createUser("Bob");

console.log(userAlice3.getName());
console.log(userBob.getName());
console.log(totalUsers);