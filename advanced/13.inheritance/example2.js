var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//with inheritance
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var RegularUser1 = /** @class */ (function (_super) {
    __extends(RegularUser1, _super);
    function RegularUser1(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    return RegularUser1;
}(Person));
var AdminUser1 = /** @class */ (function (_super) {
    __extends(AdminUser1, _super);
    function AdminUser1(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = role;
        return _this;
    }
    AdminUser1.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.role);
    };
    AdminUser1.prototype.manageUsers = function () {
        return "Managing users with role ".concat(this.role);
    };
    return AdminUser1;
}(Person));
var regularUser1 = new RegularUser1("Alice", "Bob", 24);
var adminUser1 = new AdminUser1("Alice", "Immanuvel", 24, "admin");
console.log(regularUser1.greet());
console.log(regularUser1.getAge());
console.log(adminUser1.greet());
console.log(adminUser1.getAge());
console.log(adminUser1.manageUsers());
