/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let re = []
    for (let i = 0; i <= rowIndex; i++) {
        re[i] = permutation(rowIndex, i)
    }

    return re
};

var permutation = function (n, i) {
    let facI = 1
    let facN = 1
    let facDiff = 1

    for (let j = 1; j <= n; j++) {
        if (j <= i) facI *= j
        if (j <= n - i) facDiff *= j
        facN *= j
    }

    return facN / (facI * facDiff)
}