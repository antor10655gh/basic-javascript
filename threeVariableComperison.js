let num1 = 10;
let num2 = 20;
let num3 = 8;

comperison = (x, y, z) => {
    if(x > y && x > z){
        console.log(`${x} is big`);
    }

    else if(y > x && y > z){
        console.log(`${y} is big`);
    }

    else{
        console.log(`${z} is big`);
    }
}

comperison(num1, num2, num3);