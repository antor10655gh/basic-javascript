let numbers = [10, 20, 50, 60, 80, 90, 100, 120];
console.log(`All numbers which are bigger than 80---`);
let largest = 0;
for(let bigNumbers of numbers){
    if(bigNumbers > 80){
        console.log(bigNumbers);
        largest += bigNumbers;
    }
}
console.log();
console.log(`The sum of largest number`);
console.log(largest);