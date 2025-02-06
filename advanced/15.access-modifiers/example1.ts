//without access modifiers

class User2 {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

const user21 = new User2("Alice", 24);
console.log(user21.name);
console.log(user21.age);

user21.name = "Bob";
console.log(user21.name);