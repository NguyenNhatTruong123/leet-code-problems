/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let result = new Array(matrix[0].length).fill(0).map(() => new Array(matrix.length).fill(0));
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i]
        }
    }
    return result;
};

console.log(transpose([[1, 2, 3], [4, 5, 6]]))