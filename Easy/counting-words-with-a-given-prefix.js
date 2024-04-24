/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let prefLen = pref.length
    let count = 0
    for (let i = 0; i < words.length; i++) {
        if (words[i].slice(0, prefLen) === pref) count++
    }

    return count
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"))