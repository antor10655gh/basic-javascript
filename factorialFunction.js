function getFactorial(number){
    let factorial = 1;
    let series = '';
    for(let i=1; i<=number; i++){
        factorial *= i;
        series += i;
        if(i == number){
            continue;
        }
        else{
            series += ' * ';
        }
    }
    return [`${series} = ${factorial}`];
}

let factNumber = 7;
let getFinalFactorial = getFactorial(factNumber);
console.log(getFinalFactorial);