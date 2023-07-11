function isAlphanumeric(char) {
    return char.match(/[a-z0-9]/i);
}

function getMiddleCharIndex(str) {
    const middleCharIndex = (str.length - 1) / 2;

    // get an integer for middle index value
    if (!Number.isInteger(middleCharIndex)) return ".";
    return middleCharIndex;
}

const palindromes = phrase => {
    // temporary phrase to store the current phrase without punctuations
    let tempPhrase = "";

    phrase = phrase.toLowerCase();
    for (let char of phrase) {
        if (isAlphanumeric(char)) tempPhrase += char;
    }

    phrase = tempPhrase.slice();
    let middleCharIndex = getMiddleCharIndex(phrase);
    let leftCharsPhrase = [];
    let rightCharsPhrase = [];

    for (let i = 0; i < phrase.length; i++) {
        if (i < middleCharIndex) {
            leftCharsPhrase.push(phrase[i]);
        } else if (i > middleCharIndex) {
            rightCharsPhrase.push(phrase[i]);
        }
    }

    /* reverse the characters from the left side of the middle index to make array items
    alike the right side characters of the middle index */
    leftCharsPhrase.reverse();

    /* check if every items of the array are the same then return true
    otherwise false */
    return leftCharsPhrase.every((leftChar, index) => {
        return leftChar === rightCharsPhrase[index];
    })
};

console.log(palindromes("Animal loots foliated detail of stool lamina."));

// Do not edit below this line
module.exports = palindromes;
