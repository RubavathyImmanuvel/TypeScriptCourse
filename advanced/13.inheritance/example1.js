//without inheritance
var RegularUser = /** @class */ (function () {
    function RegularUser(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    RegularUser.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName);
    };
    RegularUser.prototype.getAge = function () {
        return this.age;
    };
    return RegularUser;
}());
var AdminUser = /** @class */ (function () {
    function AdminUser(firstName, lastName, age, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.role = role;
    }
    AdminUser.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName, ", role:").concat(this.role);
    };
    AdminUser.prototype.getAge = function () {
        return this.age;
    };
    AdminUser.prototype.manageUsers = function () {
        return "Managing users with role ".concat(this.role);
    };
    return AdminUser;
}());
var regularUser = new RegularUser("Alice", "Bob", 24);
var adminUser = new AdminUser("Alice", "Immanuvel", 24, "admin");
console.log(regularUser.greet());
console.log(regularUser.getAge());
console.log(adminUser.greet());
console.log(adminUser.getAge());
console.log(adminUser.manageUsers());
