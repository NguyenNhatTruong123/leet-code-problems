/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;
    s = s.trim()
    let max = 1
    let store = []

    for (let i = 0; i < s.length; i++) {
        store.push(s[i])
        for (let j = i + 1; j < s.length; j++) {
            if (store.includes(s[j])) {
                if (store.length >= max) max = store.length
                if (j === s.length - 1) return max
                break;
            } else {
                store.push(s[j])
            }

            if (j === s.length - 1 && store.length >= max) return store.length
        }
        store = []
    }

    return max
};
