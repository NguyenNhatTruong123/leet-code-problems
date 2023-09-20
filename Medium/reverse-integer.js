/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    let strNum = x.toString()
    let re = ""

    if (strNum[0] === "-") {
        re += "-"
        strNum = strNum.substring(1)
    }
    for (let i = strNum.length - 1; i >= 0; i--) {
        re += strNum[i]
    }

    let a = parseInt(re)
    if (a >= 2147483647 || a <= -2147483647) return 0
    return a
};