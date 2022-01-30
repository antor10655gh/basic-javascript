function celciusToFarenheit(celcius){
    let farenheit = ((celcius * (9/5)) + 32);
    return farenheit;
}

let celciusValue = 5;
let farenhietResult = celciusToFarenheit(celciusValue);
console.log(`The Frenhiet Value is: ${farenhietResult}°F`);