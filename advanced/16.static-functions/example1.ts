//without static functions
class User2 {
    name:string;
    age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    isAdult() {
        return this.age >= 18;
    }
}

const userAlice = new User2("Alice", 30);
console.log(userAlice.isAdult());