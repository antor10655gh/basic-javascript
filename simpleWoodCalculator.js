function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    let chairWood = 3;
    let tableWood = 10;
    let bedWood   = 50;

    let totalChairWood = chairWood * chairQuantity;
    let totalTableWood = tableWood * tableQuantity;
    let totalBedWood   = bedWood   * bedQuantity;
    let totalWood      = totalChairWood + totalTableWood + totalBedWood;

    return `Total ChairWood: ${totalChairWood}cft, Total TableWood: ${totalTableWood}cft, Total BedWood: ${totalBedWood}cft and Total wood: ${totalWood}`;
}

let chairQuantity = 10;
let tableQuantity = 5;
let bedQuantity   = 10;

let woodMeasurement = woodCalculator(chairQuantity, tableQuantity, bedQuantity);
console.log(woodMeasurement);