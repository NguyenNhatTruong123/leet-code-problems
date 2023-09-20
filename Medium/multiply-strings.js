/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") return "0"
    let result = "0"
    let multiRe = ""
    let zeros = ""
    let memo = 0
    for (let i = num2.length - 1; i >= 0; i--) {
        for (let j = num1.length - 1; j >= 0; j--) {
            let temp = parseInt(num1[j]) * parseInt(num2[i]) + memo
            if (temp >= 10) {
                multiRe = (temp % 10).toString() + multiRe
                memo = ~~(temp / 10)
            } else {
                multiRe = temp.toString() + multiRe
                memo = 0
            }
        }

        if (memo !== 0) {
            multiRe = memo.toString() + multiRe
        }
        result = add(result, multiRe + zeros)
        multiRe = ""
        zeros += "0"
        memo = 0
    }
    if (memo !== 0) {
        result = memo.toString() + result
    }
    return result
};

var add = function (num1, num2) {
    if (num1 === "0") return num2
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
}
