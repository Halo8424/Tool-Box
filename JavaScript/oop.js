// 4 Pillars of OOP

// Encapsulation: 
    // Is the packing of data and functions into one Component and then controling access to that 
    // component to make a "black box" out of the Object. Because of this, a user of that class only 
    // needs to know its interface, not the hidden implementation. 

// Procedural programming 

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary,overTime,rate){
    return baseSalary + (overTime * rate);
};

// Encapsulation Example:
    // Note: Less parameters with the getWage method within the employee object

let employee = {
    baseSalary: 30_000,
    overTime: 10,
    rate: 20,
    getWage: function(){
        return this.baseSalary + (this.overTime * this.rate);
    }
}

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
            y: 1
        },
        draw: function(){
            console.log('draw');
        }
    };

