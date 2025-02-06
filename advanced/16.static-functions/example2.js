//with static functions
var User21 = /** @class */ (function () {
    function User21(name, age) {
        this.name = name;
        this.age = age;
    }
    User21.isAdult = function (age) {
        return age >= 18;
    };
    return User21;
}());
console.log(User21.isAdult(30));
console.log(User21.isAdult(15));
