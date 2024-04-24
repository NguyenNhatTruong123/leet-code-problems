/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
    if (password.length < 8) return false
    if (password.toLocaleLowerCase() === password) return false
    if (password.toLocaleUpperCase() === password) return false
    if (/\d/.test(password) === false) return false
    var specialCharacters = "!@#$%^&*()-+";
    for (var i = 0; i < specialCharacters.length; i++) {
        if (password.includes(specialCharacters[i])) {
            break
        } else {
            if (i === specialCharacters.length - 1) return false
        }
    }
    if (/(.)\1/.test(password) === true) return false

    return true
};

console.log(strongPasswordCheckerII("-Aa1a1a1"));