// Getting a random integer between two values, inclusive

    function randomRange(myMin, myMax) {
        return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    }

        console.log(randomRange(1,10));

// Use the Conditional (Ternary) Operator

    // Example of Checking for strict equality 
    function checkForEquality(a,b){
        return a === b ? "'a' and 'b' are Equal " : "Not Equal";
    };
    // Note - You can change global variables within these Ternary Operators


    // Example of multiple conditional Ternary Operator
    // a function that checks if a number is zero even or odd
    function checkNumber(num){
        return num === 0 ? "zero"
        : num % 2 === 0 ? "even"
        : "odd";
    }