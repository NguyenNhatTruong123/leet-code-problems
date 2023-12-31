/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num == 0 || num == 1) return true
    for (let i = 2; i <= num / 2; i++) {
        if (i * i == num) {
            return true
        }
    }
    return false
};