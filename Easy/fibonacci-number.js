/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let sq5 = Math.sqrt(5)
    let phi = (1 + sq5) / 2

    return (phi ** n - (phi - sq5) ** n) / sq5
};