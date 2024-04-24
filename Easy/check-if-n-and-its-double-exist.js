/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let double = arr.map(function (number) {
        return number * 2;
    });

    return double.some(function (number) {
        return arr.includes(number) && number !== 0;
    });
};