var User3 = /** @class */ (function () {
    function User3(name) {
        this.name = name;
    }
    User3.prototype.getName = function () {
        return this.name;
    };
    return User3;
}());
var totalUsers = 0;
function createUser(name) {
    totalUsers++;
    return new User3(name);
}
var userAlice3 = createUser("Alice");
var userBob = createUser("Bob");
console.log(userAlice3.getName());
console.log(userBob.getName());
console.log(totalUsers);
