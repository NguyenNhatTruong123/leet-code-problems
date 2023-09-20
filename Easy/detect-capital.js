/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word.toUpperCase() === word) return true
    if (word.toLowerCase() === word) return true
    if (word[0] === word[0].toUpperCase()) {
        word = word.substring(1)
        if (word.toLowerCase() === word) return true
    }
    return false
};