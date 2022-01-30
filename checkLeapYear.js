function checkLeapYear(year){
    if((year%4 == 0) && (year%100 != 0) || (year%400 == 0)){
        console.log(`${year} is leap year.`);
    }
    else{
        console.log(`${year} is not a leap year.`);
    }
}

let year = 2040;
let leapYear = checkLeapYear(year);
console.log(leapYear);