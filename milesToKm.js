let miles = 25;
let kilometer = mToKm(miles);
console.log(`The result is: ${kilometer} km`);

function mToKm(m){
    let result = m * 1.60934;
    return result;
}