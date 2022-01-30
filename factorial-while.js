function  getFactorial(fNumber){
    let factorial = 1;
    let i = 1;
    while(i<=fNumber){
        factorial *= i;
        i++;
    }
    return factorial;
}

let number = 7;
let getResult = getFactorial(number);
console.log(getResult);