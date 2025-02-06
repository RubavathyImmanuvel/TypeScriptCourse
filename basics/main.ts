function log(message) {
    console.log(message)
}

log('Hello World')

//tsc main.ts --> to compile .ts file
// node main.js --> to run .js file

//-------------------------------------------------------

//declaring variables
var number = 1;
let count = 3;
function doSomething() {
    for(var i=0; i<5; i++)
    {
        console.log(i)
    }

    console.log('Finally:', i); //i=5
}

doSomething();

function doSomething1() {
    for(let i=0; i<5; i++) //tsc automatically convert this to var, check .js file
    {
        console.log(i)
    }

    console.log('Finally with let', i); //cannot find i
}

doSomething1();

//-------------------------------------------------------


//Data types
let count1 = 1; //will be converted as var in .js file
count1 = 'a'; //Type 'string' is not assignable to type 'number'.

let count2; //type is "any", will not throw any error
count2 = 1;
count2 = 'a';
count2 = true;

let a:number;
let b:string;
let c:boolean;
let d:any;
let e:number[] = [1, 2, 3];
let f:any[] = [1, 'a', true];

const colorRed = 0;
const colorBlue = 1;
const colorGreen = 2;

enum Color { Red = 101, Blue, Green }; //there is no enum concept in .js
let backGroundColor = Color.Blue;


//-------------------------------------------------------

//Type Assertions
let color = 'red';
let endsWithD = color.endsWith('d'); //returns true

let color1;
color1 = 'red';
let endsWith = (<string> color1).endsWith('d'); //type assertion
let alternativeEndsWith = (color1 as string).endsWith('d');


//-------------------------------------------------------

//Arrow functions
let logger = function(message) {
    console.log(message);
}

let doLog1 = (message) => {
    console.log(message);
}

let doLog2 = (message) => console.log(message); //single statement

let doLog3 = message => console.log(message); //single param


//-------------------------------------------------------

//interface
let draw = (x, y) => {
    //..
}
draw('a', 7);

let draw1 = (x:number, y:number) => {
    //..
}
draw1(3, 7);

let draw2 = (point) => {
    //..
}
draw2({x:'a', y:2, z:3});

let draw3 = (point:{x:number, y:number, z:number}) => {
    //..
}
draw3({x:1, y:2, z:3});

interface Point {
    x:number,
    y:number,
    z:number
}

let draw4 = (point:Point) => {
    //..
}
draw4({x:1, y:2, z:3});


//-------------------------------------------------------

//class
class PointClass {
    x:number;
    y:number;
    z:number;

    draw = ():any => {
        console.log('x:' + this.x + ' y:' + this.y + " z:" + this.z)
    }
}


//-------------------------------------------------------

//objects
let shape:PointClass = new PointClass();
shape.x = 3;
shape.y = 10;
shape.z = 2;
shape.draw();


//-------------------------------------------------------

//constructors
class PointClass1 {
    x:number;
    y:number;
    z:number;

    constructor(x:number, y:number, z:number) { //x ?: --> x is nullable
        this.x = x;
        this.y = y;
        this.z = z;
    }

    draw = ():any => {
        console.log('x:' + this.x + ' y:' + this.y + " z:" + this.z)
    }
}

let shape1 = new PointClass1(1, 2, 3);
shape1.draw();


//-------------------------------------------------------

//Access modifiers
//public by default
class PointClass2 {
    private x:number;
    y:number;
    z:number;

    constructor(x:number, y:number, z:number) { //x ?: --> x is nullable
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public draw = ():any => {
        console.log('x:' + this.x + ' y:' + this.y + " z:" + this.z)
    }
}

let shape2 = new PointClass2(1, 2, 3);
shape2.draw();

class PointClass3 {
    constructor(private x:number, public y:number, public z:number) { //x ?: --> x is nullable
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public draw = ():any => {
        console.log('x:' + this.x + ' y:' + this.y + " z:" + this.z)
    }
}

let shape3 = new PointClass3(1, 2, 3);
shape3.draw();


//-------------------------------------------------------

//Object accessors(etter, setter)
class PointClass4 {
    constructor(private x:number, public y:number, public z:number) { //x ?: --> x is nullable
        this.x = x;
        this.y = y;
        this.z = z;
    }

    get X() {
        return this.x;
    }

    set X(value){
        this.x = value;
    }

    public draw = ():any => {
        console.log('x:' + this.x + ' y:' + this.y + " z:" + this.z)
    }
}

let shape4 = new PointClass4(1, 2, 3);
shape4.X = 7;
console.log('getter: ', shape4.X);
shape4.draw();

//-------------------------------------------------------
//modules eg:point.ts
import { PointClass5 } from "./point";

let shape5 = new PointClass5(1, 2, 3);
shape5.X = 77;
console.log('getter: ', shape5.X);
shape5.draw();