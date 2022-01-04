// Property Descriptors
    // Setting a Property within an object to read Only

    let person = { name : 'John Smith'};

    // 1st arg: obj, 2nd arg: name of target property, 3rd arg: object, the prpoerty descriptor obj. 
    Object.defineProperty(person, 'name', {
        writable: false,        // Makes this readOnly.
        enumerable: false,      // Will not show up in Object.keys.
        configurable: false     // Now you can not delete this property.
    });

    person.name = 'Will Smith';

    console.log(person) // Expected output: 'John Smith';

// Prototype vs Instance Members

    // A circle constructor with a radius property and a draw function
    function Circle(radius){
        this.radius = radius;
        // this.draw = function(){console.log('draw')}
    };

    // Assuming you will have many instances of this circle object lets move the draw function to this prototype

    Circle.prototype.draw = function(){
        console.log('draw');
    };