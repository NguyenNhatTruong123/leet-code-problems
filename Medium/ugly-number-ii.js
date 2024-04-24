/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let count = 0
    for (let i = 1; ; i++) {
        if (checkUgly(i)) count++
        if (count === n) return i
    }
};

var checkUgly = function (number) {
    if (number === 1) return true
    let prime = 2
    while (number > 1) {
        if (number % prime === 0) {
            if (prime > 5) return false
            number /= prime
        } else {
            prime++
        }
    }

    return true
}

console.log(nthUglyNumber(10));