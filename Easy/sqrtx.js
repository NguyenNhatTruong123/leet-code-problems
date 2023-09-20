/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x
    for (let i = 1; i <= x / 2; i++) {
        if ((i + 1) * (i + 1) > x) return i
    }
};