/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs.sort(function (a, b) { return a.length - b.length })
    console.log(strs)
    let ex = strs[0]
    strs.shift()
    for (let i = 0; i < strs.length; i++) {
        let cutDown = strs[i].length - ex.length
        let temp = ""
        if (cutDown == 0) temp = strs[i]
        else temp = strs[i].slice(0, -1 * cutDown)

        if (temp != ex) {
            ex = ex.slice(0, -1)
            i = -1
        }
    }

    return ex

};