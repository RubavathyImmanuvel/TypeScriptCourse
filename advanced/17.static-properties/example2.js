//with static properties
var User32 = /** @class */ (function () {
    function User32(name) {
        this.name = name;
        User32.totalUsers++;
    }
    User32.prototype.getName = function () {
        return this.name;
    };
    User32.getTotalUsers = function () {
        return User32.totalUsers;
    };
    User32.totalUsers = 0;
    return User32;
}());
console.log(User32.totalUsers);
var userAlice32 = new User32("Alice");
var userBob1 = new User32("Bob");
console.log(userAlice32.getName());
console.log(userBob1.getName());
console.log(User32.getTotalUsers());
console.log(User32.totalUsers);
