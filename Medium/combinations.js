/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let combination = factorial(n) / (factorial(k) * factorial(n - k))
    for (let i = 1; i <= combination; i++) {

    }
};

var factorial = function (n) {
    let re = 1
    for (let i = 1; i <= n; i++) {
        re *= i
    }

    return re
}