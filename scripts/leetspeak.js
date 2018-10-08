const text = `you wish you were batman`

const lettersToConvert = ['A', 'E', 'G', 'I', 'O', 'S', 'T'];
const numbers          = [4,  3,  6,  1,  0,  5,  7];

const textToTranslate = text.toUpperCase();
let translation = ``;

//ES6 array iteration
// Basically the Equivalent of python's loop

for (let letter of textToTranslate){
    // console.log(letter);

// Check to see if the current letter is in 'lettersTConvert"
// if so, grab the index
// use the index to grab the corresponding item from "numbers
// else just use the original letter"
// console.log(lettersToConvert.indexOf(letter));
let index = lettersToConvert.indexOf(letter);
    // check to see if the current letter is `lettersTConvert
if (index !== -1) {
    // if so grab the index

    // use the index to grab the corresponding letters 
    translation = translation + numbers[index];
}else{
    // elses, just use the original letter
    translation = translation + letter;
        }

}
console.log(translation);
