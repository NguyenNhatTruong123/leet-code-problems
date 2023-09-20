/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    if (n <= 3) return n - 1
    let mod = n % 3
    let quotient = (n - mod) / 3
    if (mod === 0) return Math.pow(3, quotient)
    else if (mod === 1) return 4 * Math.pow(3, quotient - 1)
    else return 2 * Math.pow(3, quotient)
};