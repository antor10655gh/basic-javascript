function smallestNumber(x, y, z){
    if(x < y && x < z){
        return `The smallest number is: ${x}`;
    }

    else if(y < x && y < z){
        return `The smallest number is: ${y}`;
    }

    else{
        return `The smallest number is: ${z}`;
    }
}

let a = 5;
let b = 4;
let c = 2;

let smallest = smallestNumber(a, b, c);
console.log(smallest);