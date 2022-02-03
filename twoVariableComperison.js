let x = 10;
let y = 20;

comperison = (x, y) => {
    if(x < y){
        console.log(`${y} is big`);
    }

    if(x != y){
        console.log(`They are not equal`);
    }
    
    else{
        console.log(`${x} is big`);
    }
}

comperison(x, y);