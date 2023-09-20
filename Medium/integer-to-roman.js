/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var roman = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    }

    var romanArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var re = ""
    for (let i = 0; i < romanArr.length; i++) {
        while (num >= romanArr[i]) {
            re += roman[romanArr[i]]
            num -= romanArr[i]
        }
    }
    return re
};