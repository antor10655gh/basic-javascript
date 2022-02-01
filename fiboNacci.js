function fiboNacciSeq(num){
    console.log(typeof num);
    let fiboNacci = [0, 1];
    for(let i = 2; i <= num; i++){
        fiboNacci[i] = fiboNacci[i-1] + fiboNacci[i-2];
    }
    return fiboNacci;
}


let fiboNacciSeries = fiboNacciSeq(15);
console.log(fiboNacciSeries);