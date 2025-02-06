//with class
class User {
    firstName: string;
    lastName: string;
    userAge: number;

    constructor(firstName: string, lastName:string, age:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userAge = age;
    }

    greet() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.userAge;
    }
}


//creating instance
let user11 = new User("Alice", "Bob", 24);
let user12 = new User("Alice", "Immanuvel", 24);

console.log(user11.greet());
console.log(user11.getAge());

console.log(user12.greet());
console.log(user12.getAge());