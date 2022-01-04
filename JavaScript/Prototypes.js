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

    