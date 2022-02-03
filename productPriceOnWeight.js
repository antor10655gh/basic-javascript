costManagement = (weight) => {
    let price;
    if(weight <= 2){
        price = weight * 30;
    }

    else{
        price = weight * 25;
    }

    return price;
} 

let productWeight = 5;
let productPrice = costManagement(productWeight);
console.log(productPrice);