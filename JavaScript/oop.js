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