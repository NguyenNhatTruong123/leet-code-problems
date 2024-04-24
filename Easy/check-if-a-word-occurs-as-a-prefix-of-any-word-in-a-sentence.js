/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    let splitSenten = sentence.split(" ")
    for (let i = 0; i < splitSenten.length; i++) {
        let remainLength = splitSenten[i].length - searchWord.length
        if (splitSenten[i].substring(0, splitSenten[i].length - remainLength) === searchWord) return i + 1
    }
    return -1
};

console.log(isPrefixOfWord("i love eating burger", "burg"))