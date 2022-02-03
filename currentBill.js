currentBillMeasurement = (unit) => {
    
    let bill;
    if(unit > 100 && unit <=200){
        let unit2 = unit - 100;
        let bill2 = unit2 * 5;
        bill = (100 * 6) + bill2;
    }

    else if(unit <= 100){
        bill = unit * 6;
    }

    return bill;
}

let billUnit = 180;
let currentBill = currentBillMeasurement(billUnit);
console.log(currentBill);