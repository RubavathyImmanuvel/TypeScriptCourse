//with access-modifiers
var User22 = /** @class */ (function () {
    function User22(name, age) {
        this.name = name;
        this.age = age;
    }
    User22.prototype.getName = function () {
        return this.name;
    };
    User22.prototype.getAge = function () {
        return this.age;
    };
    User22.prototype.setName = function (name) {
        this.name = name;
    };
    User22.prototype.setAge = function (age) {
        this.age = age;
    };
    return User22;
}());
var user22 = new User22("Alice", 24);
console.log(user22.getName());
console.log(user22.getAge());
user22.setName("Bob");
console.log(user22.getName());
