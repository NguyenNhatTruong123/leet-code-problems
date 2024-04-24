/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    return s.split("").sort().join("") === s
};