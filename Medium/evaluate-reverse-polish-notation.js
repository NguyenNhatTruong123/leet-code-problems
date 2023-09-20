var evalRPN = function (tokens) {
    let stack = [parseInt(tokens[0]), parseInt(tokens[1])]

    for (let i = 2; i < tokens.length; i++) {
        let pop = parseInt(tokens[i])
        if (!pop && pop !== 0) {
            let firstNum = stack[stack.length - 1]
            let secondNum = stack[stack.length - 2]

            let result = operatorCalculation[tokens[i]](secondNum, firstNum)

            stack.pop()
            stack.pop()
            stack.push(result)
        } else {
            stack.push(pop)
        }
    }

    return stack[0]
};

const operatorCalculation = {
    "+": function (a, b) {
        return a + b
    },
    "-": function (a, b) {
        return a - b
    },
    "*": function (a, b) {
        return a * b
    },
    "/": function (a, b) {
        return ~~(a / b)
    }
}