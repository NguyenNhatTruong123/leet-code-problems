/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arrS = s.match(new RegExp('.{1,' + k + '}', 'g'))

    for (let i = 0; i < arrS.length; i += 2) {
        arrS[i] = arrS[i].split("").reverse().join("")
    }
    return arrS.join("")
};
