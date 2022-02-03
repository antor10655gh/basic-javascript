order = (foodQuantity) => {
    let burgerPrice = 50;
    let bill = burgerPrice * foodQuantity;

    if(bill >= 200){
        bill = (burgerPrice * foodQuantity) - 30;
        return [`"Congratulations"~ You will get 30Taka discount.`, bill];
    }

    else if(bill < 200){
        bill = burgerPrice * foodQuantity;
        return bill;
    }

}

let productQuantity = 6;
let orderCost = order(productQuantity);
console.log(orderCost);