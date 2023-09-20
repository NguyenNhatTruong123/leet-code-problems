/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let re = []
    let memo = 0
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + memo
        if (i == digits.length - 1) {
            sum++
        }
        if (sum >= 10) {
            memo = 1
        } else {
            memo = 0
        }
        re.push(sum % 10)
    }

    if (memo === 1) {
        re.push(1)
    }

    return re.reverse()
};