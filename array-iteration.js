// use of forEach()----------
let food = ["Aam", "Jaam", "Kathal", "Lichu"];

// If you want to show only value or only index or only array.
let myFunction = function(value, index, array){  
    console.log(`Index-${index}: ${value}`);
    console.log(`${array}`);
    console.log("----------------------");
} 

food.forEach(myFunction);

console.log("--------------------------------");

// using map()-----------
let numbers = [2, 4, 6, 8, 10];

let myNumbers = (value) =>{
    return `${value} is even number`;
}

let return_value = numbers.map(myNumbers);
console.log(return_value);

// using filter()--------
let numbers_again = [2, 4, 6, 8, 10, 12, 15];

let filterFunction = (value) => {
    return value > 7;
}

let return_array = numbers_again.filter(filterFunction);
console.log(return_array);
