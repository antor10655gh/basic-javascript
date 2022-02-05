let vowel = Array.from('aeiou');
let sentence = 'My name is Antor';

checkVowel = (sentence) => {
    let count = 0;
    for(let elements of sentence.toLowerCase()){
        if(vowel.indexOf(elements) != -1){
           count += 1;
        }
    }
    return count;
}

let recieve = checkVowel(sentence);
console.log(`Total vowel in this sentence:`);
console.log(recieve);