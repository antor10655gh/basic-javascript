function largestNumber(numbers){
    let largest = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
let numbers = [1, 3, 4, 12, 15, 7];
let largestNum = largestNumber(numbers);
console.log(`The largest number of this array is: ${largestNum}`);