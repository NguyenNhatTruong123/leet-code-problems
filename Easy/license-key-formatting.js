/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    let re = ""
    let temp = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "-") continue
        else {
            if (temp < k) {
                re += s[i]
                temp++
            } else {
                re += "-"
                temp = 0
                i++
            }
        }
    }
    return re.split("").reverse().join("").toUpperCase()
};