/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    let row = matrix.length
    let col = matrix[0].length

    let i = 0, j = 0, k = 0
    while (k < row) {
        i = k
        let tmp = matrix[i][j]
        while (j < col) {
            if (matrix[++i][++j] !== tmp) return false
        }
        k++
        j = 0
    }
    i = 0, j = 0, k = 0
    while (k < col) {
        j = k
        let tmp = matrix[i][j]
        while (i < row) {
            if (matrix[++i][++j] !== tmp) return false
        }
        k++
        i = 0
    }

    return true
};

console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]));