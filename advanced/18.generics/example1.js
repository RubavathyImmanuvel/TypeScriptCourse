var NumberStack = /** @class */ (function () {
    function NumberStack() {
        this.items = [];
    }
    NumberStack.prototype.push = function (item) {
        this.items.push(item);
    };
    NumberStack.prototype.pop = function () {
        return this.items.pop();
    };
    return NumberStack;
}());
var StringStack = /** @class */ (function () {
    function StringStack() {
        this.items = [];
    }
    StringStack.prototype.push = function (item) {
        this.items.push(item);
    };
    StringStack.prototype.pop = function () {
        return this.items.pop();
    };
    return StringStack;
}());
var numberStack = new NumberStack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());
var stringStack = new StringStack();
stringStack.push("Hello ");
stringStack.push("World!");
console.log(stringStack.pop());
