// 4 Pillars of OOP

// Encapsulation:
// Is the packing of data and functions into one Component and then controling access to that
// component to make a "black box" out of the Object. Because of this, a user of that class only
// needs to know its interface, not the hidden implementation.

// Procedural programming

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
  return baseSalary + overTime * rate;
}

// Encapsulation Example:
// Note: Less parameters with the getWage method within the employee object

let employee = {
  baseSalary: 30_000,
  overTime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overTime * this.rate;
  },
};

// Abstraction: A way of hiding the implementation details and showing only the functionality to the user.
// Benefits: Simpler Interface and Reduce Impact of change.

// Inheritance: Is a mechanisum that helps eliminate redundant code.
// Example: html elements like (textbox), (dropDown-list), (CheckBox) have common properties like "hidden, innerHTML"
// and properties like click(), and focus(). Instead of re-writing these for every html element. We define them once in a generic object.
// and have other objects Inherit these properties and methods.

// Polymorphism: Allows us to get rid of long "if and else" and "switch & case" statements.

// Object Literals Syntax
// Create a 'Circle object literal'

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

// Factory Function Syntax
// Create a circle factory function:
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// creating a new circle object
const circle1 = createCircle(2);

// Constructor function syntax
// create a circle constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// create a new circle object using the constructor function
const circle2 = new Circle(3);

// Value vs Reference Types
// Primatives: Are copyed by their value.
// Objects: Are copyed by their reference.

// Example of a Primative type.
let number = 10;
function increase(number) {
  number++;
}

increase(number);
// console.log(number); Expected output = 10

//Example of a Reference type.
let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
//console.log(obj); Expected output = 11

// Adding a property to an object using 'circle2' from above as an example.
// Using dot notation
circle2.location = { x: 1 };

// Using bracket notation
circle2["location"] = { y: 2 };

// Deleting a property of an object
// Using dot notation
delete circle2.location;

// Using bracket notation
delete circle2["location"];

// Enumerating Properties of an object
// Use the 'for in' loop.
for (let key in circle2) {
  // console.log(key);
}

// Example of looping over an object and getting its properties and values
for (let key in circle2) {
  //console.log(key, circle2[key]);
}

// Example of getting all the keys of an object
let keys = Object.keys(circle2);
// console.log(keys)  returns an Array of key of that object.

// Example of checking an object for a property or a method. 'use the in operator'
if ("radius" in circle2) {
  // console.log('circle2 has radius');
}

// Setting Private properties and methods within an object.
// Declare them as local variables within the object.
// Add a private property 'default location' & a private method 'computeOptimumLocation' to a circle3 object

function Circle3(radius) {
  let defaultLocation = { x: 2, y: 2 };
  let computeOptiumumLocation = function (factor) {
    //.....
  };

  this.radius = radius;
  this.draw = function () {
    computeOptiumumLocation();
  };
}
//  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
//  (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.


// Coding Exercise - Stopwatch
// 1) A duration property. 2) method called reset. 3) method called start. 4) method called stop.
// 5) Add validation so the start and stop methods can not be called twice. 

function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running){
            throw new Error('Stopwatch is already running')
        }

        running = true;

        startTime = new Date();
    };

    this.stop = function(){
        if(!running){
            throw new Error('Stopwatch has already stoped')
        }

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000; 

        duration += seconds;
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };


    Object.defineProperty(this, 'duration',{
        get: function() { return duration;}
    });
};