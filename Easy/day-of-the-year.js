/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    let myArr = date.split("-")
    let year = parseInt(myArr[0])
    let month = parseInt(myArr[1])
    let day = parseInt(myArr[2])

    let leap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let nonLeap = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let re = 0
    for (let i = 1; i < month; i++) {
        if (isLeapYear(year)) {
            re += leap[i - 1]
        } else {
            re += nonLeap[i - 1]
        }
    }
    re += day

    return re
};

function isLeapYear(year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) return true
        else return false
    }

    if (year % 4 == 0) return true
    else return false
}