/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n <= 2) return 0
    let group = new Array(n).fill(1)
    for (let i = 2; i < n; i++) {
        if (group[i] === 1) {
            for (let j = 2 * i; j <= n; j += i) {
                if (group[j] === 1) {
                    group[j] = 0
                }
            }
        }
    }

    return group.reduce((accumulator, value) => accumulator + value, 0) - 2
};