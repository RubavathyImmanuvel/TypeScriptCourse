//without access modifiers
var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.name = name;
        this.age = age;
    }
    return User2;
}());
var user21 = new User2("Alice", 24);
console.log(user21.name);
console.log(user21.age);
user21.name = "Bob";
console.log(user21.name);
