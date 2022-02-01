let str = "Hello World";

function reverseString(text){
    let reverse = '';
    for(const letter of text){
        reverse = letter + reverse;
    }
    return reverse;
}

let reversedSring = reverseString(str);
console.log(reversedSring);