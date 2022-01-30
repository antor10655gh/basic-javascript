var burgerPrice = 250;
var burgerQuantity = takeBurger(burgerPrice);
console.log(`Your Burger Quantity is ${burgerQuantity}`);

function takeBurger(x){
    var parPice = 10;
    console.log("Your Burger is Ready");
    var getBurger = x / parPice;
    return getBurger;
}