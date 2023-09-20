/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false

    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            if (map[s[i]] !== t[i]) return false
        }
        else {
            if (Object.values(map).indexOf(t[i]) > -1) return false
            map[s[i]] = t[i]
        }
    }
    return true
};