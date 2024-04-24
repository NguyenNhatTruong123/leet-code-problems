/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    let result = ""
    let addAWord = ""
    let splitSentence = sentence.split(" ")
    let vowel = ["a", "i", "u", "o", "e"]

    for (let i = 0; i < splitSentence.length; i++) {
        addAWord += "a"
        if (vowel.includes(splitSentence[i][0].toLocaleLowerCase())) {
            result += splitSentence[i] + "ma"
        } else {
            let temp = splitSentence[i][0]
            result += splitSentence[i].substring(1) + temp + "ma"
        }

        result += addAWord
        if (i !== splitSentence.length - 1) result += " "
    }

    return result
}

console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"))