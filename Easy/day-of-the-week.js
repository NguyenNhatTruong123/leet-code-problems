/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    let leap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let nonLeap = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let week = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
    let days = 0

    for (let i = 1971; i < year; i++) {
        if (isLeapYear(i)) days += 366
        else days += 365
    }

    for (let j = 1; j < month; j++) {
        if (isLeapYear(year)) days += leap[j - 1]
        else days += nonLeap[j - 1]
    }

    days += day - 1
    return week[days % 7]
};

function isLeapYear(year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) return true
        else return false
    }

    if (year % 4 == 0) return true
    else return false
}