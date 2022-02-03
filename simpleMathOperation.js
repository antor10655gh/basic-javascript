// simple-calculator-----------
function calculator(x, y){
    let sum = x + y;
    let sub = x - y;
    let mul = x * y;
    let div = x / y;
    let exp = x % y;
    let total = sum + sub + mul + div + exp;
    return `Sum is: ${sum}, Sub is: ${sub}, Mul is: ${mul}, Div is: ${div}, Exp is: ${exp} and Total is: ${total}`;
}

let num1 = 20;
let num2 = 10;

let result = calculator(num1, num2);
console.log(result);
