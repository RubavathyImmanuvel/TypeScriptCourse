//with access-modifiers

class User22 {
    private name: string; //private, protected, public
    private age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    public getName() { //public by default
        return this.name;
    }

    public getAge() {
        return this.age;
    }

    public setName(name:string) {
        this.name = name;
    }

    public setAge(age:number) {
        this.age = age;
    }
}

const user22 = new User22("Alice", 24);
console.log(user22.getName());
console.log(user22.getAge());

user22.setName("Bob");
console.log(user22.getName());