/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
    let [hour, minute] = time.split(":")

    let mapHour = [{ "0": 10, "1": 10, "2": 4 }, { "0": 10, "1": 3, 2: 3, "3": 3, "4": 2, "5": 2, "6": 2, "7": 2, "8": 2, "9": 2 }]
    let mapMinute = [{ "0": 10, "1": 10, "2": 10, "3": 10, "4": 10, "5": 10 }, { "0": 10, "1": 6, "2": 6, "3": 6, "4": 6, "5": 6, "6": 6, "7": 6, "8": 6, "9": 6 }]

    let reH = 0, reM = 0

    if (hour[0] === "?" && hour[1] === "?") reH += 24
    else {
        if (hour[0] === "?") reH += mapHour[1][hour[1]]
        if (hour[1] === "?") reH += mapHour[0][hour[0]]
    }
    if (reH === 0) reH++

    if (minute[0] === "?" && minute[1] === "?") reM += 60
    else {
        if (minute[0] === "?") reM += mapMinute[1][minute[1]]
        if (minute[1] === "?") reM += mapMinute[0][minute[0]]
    }

    if (reM === 0) reM++

    return reH * reM

};