/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

    var re = ""
    var memo = 0
    while (a !== "" || b !== "") {
        var aN = a !== "" ? parseInt(a[a.length - 1]) : 0
        var bN = b !== "" ? parseInt(b[b.length - 1]) : 0

        var sum = aN + bN + memo
        if (sum >= 2) {
            memo = 1
        } else {
            memo = 0
        }

        re += (sum % 2).toString()

        a = a.substring(0, a.length - 1);
        b = b.substring(0, b.length - 1);
    }

    if (memo == 1) {
        re += "1"
    }

    return re.split("").reverse().join("")

};