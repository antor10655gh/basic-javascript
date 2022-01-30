//find out the largest number
var num1 = 10;
var num2 = 18;
var num3 = 6;

if(num1 > num2 && num1 > num3){
    console.log("The large number is " + num1);
}

else if(num2 > num3){
    console.log("The large number is " + num2);
}

else{
    console.log("The large number is " + num3);
}

// buy bike
var bikePrice = 200000;
var myCash    = 272000;

if(myCash >= bikePrice){
    if(myCash >= 220000 && myCash <= 249000){
        console.log("You can buy green bike");
    }

    else if(myCash >= 250000 && myCash <= 269000){
        console.log("You can buy blue bike");
    }

    else if(myCash >= 270000 && myCash <= 300000){
        console.log("You can buy red bike");
    }

    else{
        console.log("You can buy only white bike");
    }
}

else{
    console.log("You can't bike");
}

// cashout from your account

var presentBalance = 10000;
var cashOut        = 4500;

if( cashOut <= presentBalance){
    console.log("You can cashout " + cashOut + "tk");
}

else{
    console.log("Your balance is not enough");
}