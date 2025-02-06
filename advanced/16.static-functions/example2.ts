//with static functions
class User21 {
    name:string;
    age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    static isAdult(age:number) {
        return age >= 18;
    }
}

console.log(User21.isAdult(30));
console.log(User21.isAdult(15));