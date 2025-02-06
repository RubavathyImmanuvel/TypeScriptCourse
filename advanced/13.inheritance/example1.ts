//without inheritance
class RegularUser {
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

class AdminUser {
    firstName: string;
    lastName: string;
    age: number;
    role: string;

    constructor(firstName:string, lastName:string, age:number, role:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.role = role;
    }

    greet() {
        return `Hello ${this.firstName} ${this.lastName}, role:${this.role}`;
    }

    getAge() {
        return this.age;
    }

    manageUsers() {
        return `Managing users with role ${this.role}`
    }
}

let regularUser = new RegularUser("Alice", "Bob", 24);
let adminUser = new AdminUser("Alice", "Immanuvel", 24, "admin");

console.log(regularUser.greet());
console.log(regularUser.getAge());

console.log(adminUser.greet());
console.log(adminUser.getAge());
console.log(adminUser.manageUsers());