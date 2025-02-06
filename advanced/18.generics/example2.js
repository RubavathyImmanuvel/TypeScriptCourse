//with generics
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
var stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
var stack1 = new Stack();
stack1.push("Hello ");
stack1.push("World!");
console.log(stack1.pop());
