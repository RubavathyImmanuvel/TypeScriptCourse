//with inheritance
class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName:string, lastName:string, age:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }
}

class RegularUser1 extends Person{
    constructor(firstName:string, lastName:string, age:number) {
        super(firstName, lastName, age);
    }
}

class AdminUser1 extends Person{
    role:string;

    constructor(firstName:string, lastName:string, age:number, role:string) {
        super(firstName, lastName, age);
        this.role = role;
    }

    greet() {
        return `Hello ${this.firstName} ${this.lastName} ${this.role}`;
    }

    manageUsers() {
        return `Managing users with role ${this.role}`
    }
}

let regularUser1 = new RegularUser1("Alice", "Bob", 24);
let adminUser1 = new AdminUser1("Alice", "Immanuvel", 24, "admin");

console.log(regularUser1.greet());
console.log(regularUser1.getAge());

console.log(adminUser1.greet());
console.log(adminUser1.getAge());
console.log(adminUser1.manageUsers());