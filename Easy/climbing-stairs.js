/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return 1
    if (n === 2) return 2

    let f = 1
    let s = 2

    let re = 0

    for (let i = 3; i <= n; i++) {
        re = f + s
        f = s
        s = re
    }

    return re
};