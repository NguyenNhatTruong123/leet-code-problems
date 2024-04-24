/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits === "") return []
    var keyPads = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }

    if (digits.length === 1) return keyPads[digits]
    let finalCombo = combine2Letter(keyPads[digits[0]], keyPads[digits[1]])
    for (let i = 2; i < digits.length; i++) {
        finalCombo = combine2Letter(finalCombo, keyPads[digits[i]])
    }

    return finalCombo

};

var combine2Letter = function (num1, num2) {
    let re = []
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            re.push(num1[i] + num2[j])
        }
    }
    return re
}

console.log(letterCombinations("237"));