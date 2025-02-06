"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(message) {
    console.log(message);
}
log('Hello World');
//tsc main.ts --> to compile .ts file
// node main.js --> to run .js file
//-------------------------------------------------------
//declaring variables
var number = 1;
var count = 3;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally:', i); //i=5
}
doSomething();
function doSomething1() {
    for (var i = 0; i < 5; i++) //tsc automatically convert this to var, check .js file
     {
        console.log(i);
    }
    console.log('Finally with let', i); //cannot find i
}
doSomething1();
//-------------------------------------------------------
//Data types
var count1 = 1; //will be converted as var in .js file
count1 = 'a'; //Type 'string' is not assignable to type 'number'.
var count2; //type is "any", will not throw any error
count2 = 1;
count2 = 'a';
count2 = true;
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, 'a', true];
var colorRed = 0;
var colorBlue = 1;
var colorGreen = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 101] = "Red";
    Color[Color["Blue"] = 102] = "Blue";
    Color[Color["Green"] = 103] = "Green";
})(Color || (Color = {}));
; //there is no enum concept in .js
var backGroundColor = Color.Blue;
//-------------------------------------------------------
//Type Assertions
var color = 'red';
var endsWithD = color.endsWith('d'); //returns true
var color1;
color1 = 'red';
var endsWith = color1.endsWith('d'); //type assertion
var alternativeEndsWith = color1.endsWith('d');
//-------------------------------------------------------
//Arrow functions
var logger = function (message) {
    console.log(message);
};
var doLog1 = function (message) {
    console.log(message);
};
var doLog2 = function (message) { return console.log(message); }; //single statement
var doLog3 = function (message) { return console.log(message); }; //single param
//-------------------------------------------------------
//interface
var draw = function (x, y) {
    //..
};
draw('a', 7);
var draw1 = function (x, y) {
    //..
};
draw1(3, 7);
var draw2 = function (point) {
    //..
};
draw2({ x: 'a', y: 2, z: 3 });
var draw3 = function (point) {
    //..
};
draw3({ x: 1, y: 2, z: 3 });
var draw4 = function (point) {
    //..
};
draw4({ x: 1, y: 2, z: 3 });
//-------------------------------------------------------
//class
var PointClass = /** @class */ (function () {
    function PointClass() {
        var _this = this;
        this.draw = function () {
            console.log('x:' + _this.x + ' y:' + _this.y + " z:" + _this.z);
        };
    }
    return PointClass;
}());
//-------------------------------------------------------
//objects
var shape = new PointClass();
shape.x = 3;
shape.y = 10;
shape.z = 2;
shape.draw();
//-------------------------------------------------------
//constructors
var PointClass1 = /** @class */ (function () {
    function PointClass1(x, y, z) {
        var _this = this;
        this.draw = function () {
            console.log('x:' + _this.x + ' y:' + _this.y + " z:" + _this.z);
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return PointClass1;
}());
var shape1 = new PointClass1(1, 2, 3);
shape1.draw();
//-------------------------------------------------------
//Access modifiers
//public by default
var PointClass2 = /** @class */ (function () {
    function PointClass2(x, y, z) {
        var _this = this;
        this.draw = function () {
            console.log('x:' + _this.x + ' y:' + _this.y + " z:" + _this.z);
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return PointClass2;
}());
var shape2 = new PointClass2(1, 2, 3);
shape2.draw();
var PointClass3 = /** @class */ (function () {
    function PointClass3(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.draw = function () {
            console.log('x:' + _this.x + ' y:' + _this.y + " z:" + _this.z);
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return PointClass3;
}());
var shape3 = new PointClass3(1, 2, 3);
shape3.draw();
//-------------------------------------------------------
//Object accessors(etter, setter)
var PointClass4 = /** @class */ (function () {
    function PointClass4(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.draw = function () {
            console.log('x:' + _this.x + ' y:' + _this.y + " z:" + _this.z);
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Object.defineProperty(PointClass4.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return PointClass4;
}());
var shape4 = new PointClass4(1, 2, 3);
shape4.X = 7;
console.log('getter: ', shape4.X);
shape4.draw();
//-------------------------------------------------------
//modules eg:point.ts
var point_1 = require("./point");
var shape5 = new point_1.PointClass5(1, 2, 3);
shape5.X = 77;
console.log('getter: ', shape5.X);
shape5.draw();
