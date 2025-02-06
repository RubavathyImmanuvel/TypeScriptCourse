var myString: string = "test";
var myNumber: number = 1;
var myBoolean: boolean = true;

myString = myNumber;//error
myBoolean = myString;//error
myNumber = myBoolean;//error

console.log(myString, myBoolean, myNumber);