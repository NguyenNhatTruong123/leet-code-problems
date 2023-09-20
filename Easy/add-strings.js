/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {

    let re = ""
    let memo = 0
    while (num1.length > 0 || num2.length > 0) {
        let multi = 0
        if (!num1) multi = parseInt(num2[num2.length - 1]) + memo
        else if (!num2) multi = parseInt(num1[num1.length - 1]) + memo
        else multi = parseInt(num1[num1.length - 1]) + parseInt(num2[num2.length - 1]) + memo

        re = (multi % 10).toString() + re

        if (multi >= 10) {
            memo = 1
        } else {
            memo = 0
        }

        num1 = num1.substring(0, num1.length - 1)
        num2 = num2.substring(0, num2.length - 1)
    }

    if (memo === 1) {
        re = "1" + re
    }

    return re
};