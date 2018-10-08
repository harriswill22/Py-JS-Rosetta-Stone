const textToTranslate  =    `you wish you were batman`

// const textToTranslate = tex.toUpperCase();
let translation = ``;

//A function that accepts a letter 

//def translate(letter):
function translate(letter) {
    const upperLetter = letter.toUpperCase();
    const lettersToNumbers = {
        'A': '4',
        'E': '3',
        'G': '6',
        'I': '1',
        'O': '0',
        'S': '5',
        'T': '7'
    };
    const replacement = lettersToNumbers[letter];
    // if (replacement) {
        // return replacement;
    // }else {
        // return letter;
    // }
    // Return replacement if its truth
    // else return letter
    return replacement || letter;
     // short circuit evaluation 
}

    function translateSentence(sentence) {
        let translation = ``;
        for (let character of textToTranslate) {
            translation = translation + translate(character);
    }
    return translation;
    }
console.log(translateSentence(textToTranslate));
