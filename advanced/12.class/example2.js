//with class
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userAge = age;
    }
    User.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.getAge = function () {
        return this.userAge;
    };
    return User;
}());
//creating instance
var user11 = new User("Alice", "Bob", 24);
var user12 = new User("Alice", "Immanuvel", 24);
console.log(user11.greet());
console.log(user11.getAge());
console.log(user12.greet());
console.log(user12.getAge());
