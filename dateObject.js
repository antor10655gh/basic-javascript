let dateObj = new Date();

// findout the day by using switch()
switch(dateObj.getDay()){
    case 1:
        console.log("Today is Monday!");
        break;

    case 2:
        console.log("Today is Tuesday!");
        break;

    case 3:
        console.log("Today is Wednesday!");
        break;

    case 4:
        console.log("Today is Thursday!");
        break;

    case 5:
        console.log("Today is Friday!");
        break; 

    case 6:
        console.log("Today is Saturday!");
        break; 

    case 7:
        console.log("Today is Sunday!");
        break;    
}


console.log(`The day is: ${dateObj.getDay()}`);
console.log(`The month is: ${dateObj.getMonth()+1}`);
console.log(`The year is: ${dateObj.getFullYear()}`);
console.log(`The time is: ${dateObj.getTime()}`);