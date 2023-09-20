/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let re = []
    let sum = 0

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "C") re.pop()

        else if (operations[i] === "D") {
            re.push((2 * parseInt(re[re.length - 1])).toString())
        }

        else if (operations[i] === "+") {
            re.push((parseInt(re[re.length - 1]) + parseInt(re[re.length - 2])).toString())
        }
        else {
            re.push(operations[i])
        }
    }

    for (let i = 0; i < re.length; i++) {
        sum += parseInt(re[i])
    }

    return sum
};