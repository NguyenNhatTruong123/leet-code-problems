/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return "1"
    if (n === 2) return "11"

    let strResult = "11"
    for (let i = 3; i <= n; i++) {
        strResult = makeSayDigit(strResult)
    }

    return strResult
};

var makeSayDigit = function (str) {
    let result = ""
    let count = 1
    let pivot = str[0]

    for (let i = 1; i < str.length; i++) {
        if (str[i] === pivot) count++
        else {
            result += count.toString() + pivot
            pivot = str[i]
            count = 1
        }
    }

    result += count.toString() + pivot

    return result
}