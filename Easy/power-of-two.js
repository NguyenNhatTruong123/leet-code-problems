/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 1 || n === 2) return true
    let twoPow = 1
    while (n > twoPow) {
        twoPow *= 2
        n /= 2

        if (n === twoPow || (n === twoPow * 2)) return true
    }
    return false
};