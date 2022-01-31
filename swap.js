let x = 5;
let y = 7;
console.log(x, y);

// first approach
let z = x;
x = y;
y = z;
console.log(x, y);

// destructuring
[x, y] = [y, x];
console.log(x, y);