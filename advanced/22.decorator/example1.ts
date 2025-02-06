//without decorator
class Calculator {
    add(a:number, b:number) {
        console.log(`Calling add method with arguments ${a} and ${b}`);
        const result = a + b;
        console.log(`result: ${result}`);
        return result;
    }

    subtract(a:number, b:number) {
        console.log(`Calling add method with arguments ${a} and ${b}`);
        const result = a - b;
        console.log(`result: ${result}`);
        return result;
    }
}

const calculator = new Calculator();
calculator.add(2, 3);
calculator.subtract(5, 3);