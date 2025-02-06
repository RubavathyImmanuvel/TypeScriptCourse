var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.name = name;
        this.age = age;
    }
    User2.prototype.isAdult = function () {
        return this.age >= 18;
    };
    return User2;
}());
var userAlice = new User2("Alice", 30);
console.log(userAlice.isAdult());
