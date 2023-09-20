/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    var re = [];
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                re.push(j - i)
                break
            }
            if (j == temperatures.length - 1) {
                re.push(0)
            }
        }
    }
    re.push(0)

    return re
};