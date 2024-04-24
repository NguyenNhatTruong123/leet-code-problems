/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function (startValue, target) {
    let re = 0
    while (target != startValue) {
        re++
        if (target + 1 != startValue && target % 2 === 0) {
            target /= 2
        } else {
            target += 1
        }
    }
    return re
};

console.log(brokenCalc(3, 10));