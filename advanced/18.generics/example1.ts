//without generics
class NumberStack {
    private items:number[] = [];

    push(item:number) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }
}

class StringStack {
    private items:string[] = [];

    push(item:string) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }
}

const numberStack = new NumberStack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());

const stringStack = new StringStack();
stringStack.push("Hello ");
stringStack.push("World!");
console.log(stringStack.pop());