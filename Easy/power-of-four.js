/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n === 1 || n === 4) return true
    let fourPow = 1
    while (n > fourPow) {
        fourPow *= 4
        n /= 4

        if (n === fourPow || n === 4 * fourPow) return true
    }
    return false
};