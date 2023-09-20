/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function (n) {
    let maxLength = 1;
    let sumLength = 1

    while (sumLength <= n && (sumLength + maxLength + 1) <= n) {
        maxLength++
        sumLength += maxLength
    }

    let re = 0;

    for (let i = 2; i <= maxLength; i++) {
        let continuousSum = i * (i - 1) / 2
        let beginning = (n - continuousSum) / i

        if (Number.isInteger(beginning)) {
            re++
        }
    }
    re++

    return re
};