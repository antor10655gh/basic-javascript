arrayFilter = (value, index, array) => {
    return value > 18;
}

let numbers = [32, 14, 15, 55, 45, 65];

let recieve = numbers.filter(arrayFilter);
console.log(recieve);