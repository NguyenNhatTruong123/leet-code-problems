/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
    let max1 = parseInt(event1[1].split(":").join(""))
    let min1 = parseInt(event1[0].split(":").join(""))
    let max2 = parseInt(event2[1].split(":").join(""))
    let min2 = parseInt(event2[0].split(":").join(""))

    if (min2 <= max1 && min2 >= min1 || max2 >= min1 && max2 <= max1) return true
    if (max1 >= min2 && max1 <= max2 || min1 <= max2 && min1 >= min2) return true
    if (min1 <= min2 && max1 >= max2) return true
    if (min2 <= min1 && max2 >= max1) return true
    return false
};

console.log(haveConflict(["14:13", "22:08"], ["02:40", "08:08"]));