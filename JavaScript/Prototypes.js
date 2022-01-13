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

        