/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if (num <= 9) return num
    let strNum = num.toString();
    let sum = 0
    for (let i = 0; i < strNum.length; i++) {
        sum += parseInt(strNum[i])
    }
    return addDigits(sum)
};