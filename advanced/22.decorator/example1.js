var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        console.log("Calling add method with arguments ".concat(a, " and ").concat(b));
        var result = a + b;
        console.log("result: ".concat(result));
        return result;
    };
    Calculator.prototype.subtract = function (a, b) {
        console.log("Calling add method with arguments ".concat(a, " and ").concat(b));
        var result = a - b;
        console.log("result: ".concat(result));
        return result;
    };
    return Calculator;
}());
var calculator = new Calculator();
calculator.add(2, 3);
calculator.subtract(5, 3);
