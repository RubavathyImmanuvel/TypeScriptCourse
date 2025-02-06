var myString = "test";
var myNumber = 1;
var myBoolean = true;
myString = myNumber; //error
myBoolean = myString; //error
myNumber = myBoolean; //error
console.log(myString, myBoolean, myNumber);
