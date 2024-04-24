/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let morseSet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    let morseArr = []

    for (let i = 0; i < words.length; i++) {
        let morseString = ""
        for (let j = 0; j < words[i].length; j++) {
            let index = words[i][j].charCodeAt(0) - 97
            morseString += morseSet[index]
        }
        morseArr.push(morseString)
    }

    return Array.from(new Set(morseArr)).length
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))