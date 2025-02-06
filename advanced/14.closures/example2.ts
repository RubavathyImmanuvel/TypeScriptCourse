function createCounter() {
    let counter = 0;

    return { //encapsulation, scalability
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}

const counter1 = createCounter();
counter1.increment();
console.log(counter1.getValue());

const counter2 = createCounter();
counter2.increment();
counter2.increment();
console.log(counter2.getValue());