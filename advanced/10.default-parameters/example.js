var concatsStrings = function (a, b, c) {
    if (c === void 0) { c = "string"; }
    return a + b + c;
};
console.log(concatsStrings("a", "b", "c"));
console.log(concatsStrings("a", "b"));
