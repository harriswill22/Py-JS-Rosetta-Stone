const text = `you wish you were batman`

// 'object in Javascript
// Basically a python dictionary 
const lettersToNumbers = {
    'A': '4',
    'E': '3',
    'G': '6',
    'I': '1',
    'O': '0',
    'S': '5',
    'T': '7'
};

const textToTranslate = text.toUpperCase();
let translation = ``;
// loop through string to translate  
for(let letter of textToTranslate) {
    const replacement = lettersToNumbers[letter];
    // and its value is not 'falsey': false,null, undefined, 0, '', NaN
    if (lettersToNumbers[letter]){
        console.log(`${letter} is ${lettersToNumbers[letter]}`); 
        translation = translation + lettersToNumbers[letter];
    
    }else {
        console.log(`${letter} stays the same`)
        translation = translation + letter;
    }
// if letter is a key in our "dictionary "
// use the translation.
// otherwise, just use the original letter.
}
console.log(translation)
