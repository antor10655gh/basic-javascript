var myMobile = {
    Name: "Realme 8 Pro",
    Ram: "8 GB",
    Rom: "128 GB",
    Camera: "108 Megapixel",
    Battery: "4500mAh",
}

myMobile.Rom = "256 GB";
console.log("My Mobile Specification is given below:")
for(var getValue in myMobile){
    console.log(`${getValue}: ${myMobile[getValue]}`);
}