let fiboNacci = [0, 1];
for(let i = 2; i <= 10; i++){
    fiboNacci[i] = fiboNacci[i-1] + fiboNacci[i-2];
}

console.log(fiboNacci);