farenhietToCelcius = function(farenhiet){
    let celcius = ((farenhiet - 32)*(5/9));
    return celcius;
}
let farenhietValue = 8;
let farenhietResult = farenhietToCelcius(farenhietValue);
console.log(`The Celcius Value is: ${farenhietResult}°C`);