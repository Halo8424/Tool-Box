// Prototypes

// --- Moving a "method" from the instance of the objects constructor to its "Prototype constructor"
    function Triangle(isTriangle) {
    this.isTriangle = isTriangle;
        // this.drawTriangle = function () {
        //     console.log("Triangle!!");
        // };
    }

    Triangle.prototype.drawTriangle =  function () {
        console.log("Triangle!!");
    };   
        

// --- Creating your own Prototypical Inheritance
    // -- Example of a circle & square constructor using Prototypical Inheritance, Using the "drawTriangle method from above"

    function Circle(radius){
        this.radius = radius;
    }

    function Square(){};

    // -- Example of using Inheritance
        Circle.prototype = Object.create(Triangle.prototype);
        Square.prototype = Object.create(Triangle.prototype);

        let circle01 = new Circle();
        let square02 = new Square();
            circle01.drawTriangle(); // Expected output: Triangle!!
            square02.drawTriangle(); // Expected output: Triangle!!

    // ** Best Practice: When ever we 'Reset' the prototype, reset its constuctor as well. 
        Circle.prototype.constructor = Circle;
        Square.prototype.constructor = Square;


// --- Intermediate Function Inheritance
    // -- Example of a function that extends the Triangles prototype and resets its constuctor

    function extend(Child, Parent){
        Child.prototype = Object.create(Parent.prototype);
        Child.prototype.constructor = Child;
    };

    //-- Example of using the new Intermediate Function Inheritance

    function Rectangle(size){   //- New Rectangle Constructor.
        this.size = size;
    }

    extend(Rectangle, Triangle);    //- extending Rectangle to Inherit Triangle.

    let rectangle01 = new Rectangle(4);
        rectangle01.drawTriangle(); //- Expected output: Triangle!!