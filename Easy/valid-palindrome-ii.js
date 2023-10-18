/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    if (checkPalindrome(s)) return true
    let i = 0
    let j = s.length - 1

    while (s[i] === s[j]) {
        i++;
        j--;
    }

    let removeAtI = s.slice(0, i) + s.slice(i + 1)
    let removeAtJ = s.slice(0, j) + s.slice(j + 1)
    if (!checkPalindrome(removeAtI) && !checkPalindrome(removeAtJ)) return false
    return true;

};

var checkPalindrome = function (s) {
    return s === s.split("").reverse().join("")
}
