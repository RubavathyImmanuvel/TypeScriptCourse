//with generics
class Stack<T> {
    private items:T[] = [];

    push(item:T) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop());

const stack1 = new Stack<string>();
stack1.push("Hello ");
stack1.push("World!");
console.log(stack1.pop());