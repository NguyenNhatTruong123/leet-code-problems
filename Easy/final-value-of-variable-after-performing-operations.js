/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let sum = 0
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].includes("-")) sum--
        else sum++
    }
    return sum
};

console.log(finalValueAfterOperations(["++X", "++X", "X++"]))