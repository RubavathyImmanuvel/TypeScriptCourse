//with static properties
class User32{
    name:string;
    static totalUsers:number = 0;

    constructor(name:string) {
        this.name = name;
        User32.totalUsers++;
    }

    getName() {
        return this.name;
    }

    static getTotalUsers() {
        return User32.totalUsers;
    }
}

console.log(User32.totalUsers);
const userAlice32 = new User32("Alice");
const userBob1 = new User32("Bob");

console.log(userAlice32.getName());
console.log(userBob1.getName());
console.log(User32.getTotalUsers());
console.log(User32.totalUsers);