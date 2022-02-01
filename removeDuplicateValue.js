let fruits = ["apple", "banana", "orange", "lichui", "banana", "jackfruits", "orange", "dragonfood"];

function removedublicate(fruits){
    let unique = [];
    for(let element of fruits){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

let uniqueFruits = removedublicate(fruits);
console.log(uniqueFruits);