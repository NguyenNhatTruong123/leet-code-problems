/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
    let splitEquation = equation.split("=")
    let [rightXEquation, rightNumEquation] = finalEquation(splitEquation[0], -1)
    let [leftXEquation, leftNumEquation] = finalEquation(splitEquation[1], 1)

    let xEquation = rightXEquation + leftXEquation
    let numEquation = rightNumEquation + leftNumEquation

    if (xEquation === 0 && numEquation === 0) return "Infinite solutions"
    else if (xEquation === 0 && numEquation !== 0) return "No solution"
    else {
        return "x=" + (numEquation / xEquation).toString()
    }
};

var finalEquation = function (equation, passEqual) {
    let numEquation = 0
    let xEquation = 0
    let plus = 1

    for (let i = 0; i < equation.length; i++) {
        if (equation[i] === "-") plus = -1
        else if (equation[i] === "+") plus = 1
        else if (equation[i] === "x") xEquation -= plus * passEqual
        else {
            let number = ""
            while (!isNaN(parseInt(equation[i]))) {
                number += equation[i]
                i++
            }
            let num = parseInt(number)
            if (equation[i] === "x") {
                xEquation -= num * plus * passEqual
            } else {
                numEquation += num * plus * passEqual
                i--
            }
        }
    }

    return [xEquation, numEquation]
}
