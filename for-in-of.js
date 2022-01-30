let passengerName = "Md Abdul Motaleb Antor";
let busName = ["Ena", "Rajib", "Hanif", "Desh-Travel", "Sonar-Bangla"];
let passergerInfo = {
    Name: "Md Abdul Motaleb Antor",
    Email: "asarvinantor1111@gmail.com",
    Phone: "01795937735",
    Address: "Jamalpur",
}

// for-in ---> we will get index
// for(var x in busName){
//     console.log(`Index: ${x}`);
// }

// console.log("------------------------------"); 

// for-of ---> we will get items
// for(var x of busName){
//     console.log(`Item: ${x}`);
// }

// find out the object value
for(var x in passergerInfo){
    console.log(`${x}: ${passergerInfo[x] }`);
}