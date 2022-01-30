// by using for loop-------------------------
let foodItem = ["Cook", "Biriyani", "Apple", "Orange", "Sweets", "Honey"];
let len = foodItem.length;
for(i=0; i<len; i++){
    console.log(`Index: ${i}`);
    console.log(foodItem[i]);
    console.log("-----------------------");
}

console.log("-----------------------------------------------------");

// by using while loop------------------------
let mobileBrand = ["Apple", "Samsung", "Realme", "Xiomi", "LG", "Oppo", "Redmi"];
let len1 = mobileBrand.length;
let j = 0;

while(j<len){
    console.log(`Index: ${j}`);
    console.log(mobileBrand[j]);
    console.log("-------------------");
    j++;
}
