/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let pivot = 10
    let mult = 1
    let temp = num
    let max = num
    while (num > pivot / 2) {
        let modulus = num % pivot > 10 ? Math.floor((num % pivot) / (pivot / 10)) : num % pivot
        if (modulus === 6) {
            temp = num + 3 * mult
            if (temp > max) max = temp
        }
        mult *= 10
        pivot *= 10
    }
    return max
};

console.log(maximum69Number(66))