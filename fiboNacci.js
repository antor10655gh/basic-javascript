function fiboNacciSeq(fiboNacci){
    for(let i = 2; i <= 10; i++){
        fiboNacci[i] = fiboNacci[i-1] + fiboNacci[i-2];
    }
    return fiboNacci;
}

let fiboNacci = [0, 1];
let finalFiboNacci = fiboNacciSeq(fiboNacci);
console.log(finalFiboNacci);