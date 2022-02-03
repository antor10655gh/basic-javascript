let mobileBrand = ['Realme', 'Xiomi', 'Redmi', 'Apple', 'Samsung', 'Vivo', 'Oppo'];
let mLength = mobileBrand.length;

// display element by using for loop
for(let i = 0; i < mLength; i++){
    console.log(mobileBrand[i]);
}
console.log();

// display element by using for-of method
for(let element of mobileBrand){
    console.log(element);
}
console.log();

// display element by using forEach method
function displayElement(value){
    console.log(value);
}
mobileBrand.forEach(displayElement);
