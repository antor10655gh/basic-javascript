function ageCalculate(birthYear){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let age = currentYear - birthYear;
    return age;
}

let birthYear = 1999;
let getAge    = ageCalculate(birthYear);
console.log(getAge);