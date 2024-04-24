/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let kArr = k.toString().split("")
    let re = []
    let memo = 0
    while (kArr.length > 0 || num.length > 0) {
        let sum = 0
        if (kArr.length === 0) sum = num[num.length - 1] + memo
        else if (num.length === 0) sum = parseInt(kArr[kArr.length - 1]) + memo
        else sum = parseInt(kArr[kArr.length - 1]) + num[num.length - 1] + memo

        re.unshift(sum % 10)

        if (sum >= 10) {
            memo = 1
        } else {
            memo = 0
        }

        kArr.pop()
        num.pop()
    }

    if (memo === 1) {
        re.unshift(1)
    }

    return re
};

console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9], 1));
