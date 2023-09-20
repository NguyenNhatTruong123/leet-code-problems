/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let re = []
    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0) {
            re[i - 1] += "Fizz"
        }
        if (i % 5 === 0) {
            re[i - 1] += "Buzz"
            continue
        }
    }

    return re
};