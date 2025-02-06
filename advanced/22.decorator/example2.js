var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod(target, propertykey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling ".concat(propertykey, " method with arguments ").concat(args.join(',')));
        var result = originalMethod.apply(this, args);
        console.log("result: ".concat(result));
        return result;
    };
}
var Calculator1 = /** @class */ (function () {
    function Calculator1() {
    }
    Calculator1.prototype.add = function (a, b) {
        var result = a + b;
        return result;
    };
    Calculator1.prototype.subtract = function (a, b) {
        var result = a - b;
        return result;
    };
    __decorate([
        logMethod //tsc <file> -experimentalDecorators --target es5
    ], Calculator1.prototype, "add", null);
    __decorate([
        logMethod
    ], Calculator1.prototype, "subtract", null);
    return Calculator1;
}());
var calculator1 = new Calculator1();
calculator1.add(2, 3);
calculator1.subtract(5, 3);
