reduceArray = (total, value, index, array) => {
    console.log(total);
    return total + value;
}

let numbers = [12, 44, 55, 66, 77, 88];
let recieve = numbers.reduce(reduceArray);
console.log(recieve);