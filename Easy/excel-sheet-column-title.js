/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let re = ""
    while (columnNumber > 0) {
        if (columnNumber <= 26) {
            re = String.fromCharCode(97 + columnNumber - 1) + re
            return re.toLocaleUpperCase()
        } else {
            let pivot = columnNumber % 26 !== 0 ? columnNumber % 26 : 26
            re = String.fromCharCode(97 + pivot - 1) + re
            let circle = columnNumber % 26 === 0 ? 1 : 0
            columnNumber = (columnNumber - columnNumber % 26) / 26 - circle
        }
    }
};

console.log(convertToTitle(52))