let p = 'Aam Pata Jura Jura';
let count = 0;
for(let x of p.toLowerCase()){

    if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
        count += 1;
    }
}

console.log(count);

let g = 'Ami vat khabo';
let count1 = 0;
let v = ['a', 'e', 'i', 'o', 'u'];
for(let h of g.toLowerCase()){
    if(v.indexOf(h) != -1){
        count1 += 1;
    }
}

console.log(count1);