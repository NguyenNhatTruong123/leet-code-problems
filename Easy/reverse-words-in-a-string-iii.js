/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.split(" ")
    let re = ""
    for (let i = 0; i < s.length; i++) {
        re += s[i].split("").reverse().join("")
        if (i < s.length - 1) re += " "
    }
    return re
};

console.log(reverseWords("Let's take LeetCode contest"))