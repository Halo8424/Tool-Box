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
        

