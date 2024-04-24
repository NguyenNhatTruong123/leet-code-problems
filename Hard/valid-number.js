/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    // Regular expression to match the valid number pattern
    const pattern = /^\s*[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?\s*$/;

    return pattern.test(s);
};