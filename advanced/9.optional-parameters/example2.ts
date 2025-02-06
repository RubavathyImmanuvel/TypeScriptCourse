var conCatStrings  = function (a, b, c) {
    return a + b + c;
}

var conCatStrings2  = function (a, b, c?) {
    return a + b + c;
}


console.log(conCatStrings("a", "b", "c"));
console.log(conCatStrings("a", "b")); //error

console.log(conCatStrings2("a", "b"));