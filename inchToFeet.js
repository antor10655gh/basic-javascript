let inches = 132;
let feet = inchToFeet(inches);
console.log(`The result is: ${feet} feet`);

function inchToFeet(x){
    let result = x / 12;
    return result; 
}