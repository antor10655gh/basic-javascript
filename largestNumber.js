function largestNumber(x, y, z){
    if(x > y && x > z){
        return `The largest number is: ${x}`;
    }

    else if(y > x && y > z){
        return `The largest number is: ${y}`;
    }

    else{
        return `The largest number is: ${z}`;
    }
}

let a = 100;
let b = 95;
let c = 101;

let largest = largestNumber(a, b, c);
console.log(largest);