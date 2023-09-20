/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        let tmp = s.slice(0, i) + s.slice(i + 1)
        if (tmp.indexOf(s[i]) === -1) return i
    }
    return -1
};