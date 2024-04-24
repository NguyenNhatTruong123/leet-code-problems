/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
    let result = 0
    for (let i = 1; i <= n; i++) {
        let tmp = i.toString();
        let setTmp = [...new Set(tmp.split(""))]

        if (setTmp.length === tmp.length) result++

    }

    return result
};

console.log(countSpecialNumbers(20));