var calculate = function (s) {
    s = s.replace(/ /g, '')
    let res = 0, sum = 0, sign = 1;
    let myStack = [];
    myStack.push(1);

    for (let ch of s) {
        if (!["+", "-", "(", ")"].includes(ch)) sum = sum * 10 + parseInt(ch);
        else {
            res += sum * sign * myStack[myStack.length - 1];
            sum = 0;
            if (ch === '-') sign = -1;
            else if (ch === '+') sign = 1;
            else if (ch === '(') {
                myStack.push(myStack[myStack.length - 1] * sign);
                sign = 1;
            }
            else if (ch === ')') myStack.pop();
        }
    }
    return res += (sign * sum);
};