/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let splitPattern = pattern.split("")
    let splitS = s.split(" ")

    if (splitPattern.length !== splitS.length) return false
    return makePattern(splitPattern) === makePattern(splitS)
};

var makePattern = function (s) {
    let str = ""
    let list = {}
    let convert = 1
    for (let i = 0; i < s.length; i++) {
        if (!list.hasOwnProperty(s[i])) {
            list[s[i]] = convert
            str += convert.toString()
            convert++
        } else {
            str += list[s[i]]
        }
    }

    return str
}
