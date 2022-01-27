// Getting a random integer between two values, inclusive

    function randomRange(myMin, myMax) {
        return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    }

        console.log(randomRange(1,10));

// Use the Conditional (Ternary) Operator

    // Checking for strict equality Example
    function checkForEquality(a,b){
        return a === b ? "'a' and 'b' are Equal " : "Not Equal";
    };

    // Note - You can change global variables within these Ternary Operators