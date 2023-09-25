/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0
    for (let i = low; i <= high; i++) {
        let stringInt = i.toString()
        let lengthInt = stringInt.length

        if (lengthInt % 2 !== 0) continue

        let firstSum = 0
        let lastSum = 0
        for (let j = 0; j <= lengthInt / 2 - 1; j++) {
            firstSum += parseInt(stringInt[j])
            lastSum += parseInt(stringInt[lengthInt - 1 - j])
        }
        if (firstSum === lastSum) count++
    }
    return count
};

console.log(countSymmetricIntegers(1200, 1230));