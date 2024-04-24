/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length === 0) return true
    if (s.length % 2 === 1) return false
    else {
        let index = 0
        if (s[0] === "(") {
            index = s.lastIndexOf(")")
        } else if (s[0] === "[") {
            index = s.lastIndexOf("]")
        } else if (s[0] === "{") {
            index = s.lastIndexOf("}")
        }

        if (index === -1 || index % 2 === 0) return false
        else {
            s = s.substring(1)
            let newStr = s.substr(0, index - 1) + s.substr(index, s.length);
            return isValid(newStr)
        }
    }
};

console.log(isValid("[({(())}[()])]")); 