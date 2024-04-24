/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let row = mat.length - 1
    let col = mat[0].length - 1
    let sum = 0
    let pivot = 0

    while (row) {
        sum += mat[pivot][col] + mat[row][pivot] + mat[pivot][pivot] + mat[row][col]
        row--
        col--
    }
    return sum;
};

console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))