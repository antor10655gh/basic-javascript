function simpleCalulator(a, b) {

    //inner function
    function adition() {
       let sum = a + b;
       console.log("Adition is: " + sum);
    }

    adition();

    function substruction() {
        let sub = a - b;
        console.log("Substruction is: " + sub);
    }

    substruction();

    function multiplication() {
        let mul = a * b;
        console.log("Multiplication is: " + mul);
    }

    multiplication();

    function division() {
        let div = a / b;
        console.log("Division is: " + div);
    }

    division();

}

simpleCalulator(30,20);