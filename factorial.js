let factorial = 1;
let series = '';

for(let i = 1; i <= 8; i++){
    factorial *= i;
    series += i;
    if(i==8){
        continue;
    }
    series += ' * ';
}

console.log(`${series} = ${factorial}`);