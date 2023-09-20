/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n <= 9 && n != 1 && n != 7) {
        return false
    }
    if (n == 1 || n == 7) {
        return true
    }

    let strNum = n.toString()
    let sum = 0
    for (let i = 0; i < strNum.length; i++) {
        sum += parseInt(strNum[i]) * parseInt(strNum[i])
    }
    console.log(sum)
    return isHappy(sum)

};