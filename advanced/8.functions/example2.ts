function addNumbers(a: number, b: number) {
    return a + b;
}

var result = addNumbers(1, 2);
console.log(result); //3

result = addNumbers("1", "2"); //error
console.log(result); //error
