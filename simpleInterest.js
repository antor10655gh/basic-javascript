simpleInterest = function(p, r, t){
    let sInterest = ((p * r * t)/100);
    let backToBank = (sInterest + p);
    return [`Your Interest is: ${sInterest} and You Have To Need Back On Bank: ${backToBank}`];
}

let p = 1000;
let r = 5;
let t = 2;
let result = simpleInterest(p, r, t);
console.log(result);