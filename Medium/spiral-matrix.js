/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let len = matrix.length * matrix[0].length
    let array = new Array()

    let row = 0
    let col = 0

    let backtrack = []

    let grown = true

    let shrinkRow = matrix.length
    let shrinkCol = matrix[0].length
    let up = 0

    let check = 0

    for (let i = 1; i <= len; i++) {
        if (!backtrack.includes(row.toString() + "," + col.toString())) {
            array.push(matrix[row][col])
            backtrack.push(row.toString() + "," + col.toString())
        } else {
            if (col === check && row === check) {
                let tmp = backtrack[backtrack.length - 1].split(",")
                row = parseInt(tmp[0])
                col = parseInt(tmp[1])
                shrinkCol--
                shrinkRow--
                up++
                check++
                grown = !grown
                i--
            }
        }
        if (grown) {
            if (col < shrinkCol - 1) {
                col++;
                continue
            }
            else {
                if (row < shrinkRow - 1) {
                    row++;
                    continue
                }
            }
        } else {
            if (col > up) {
                col--;
                continue
            }
            else {
                if (row > up) {
                    row--;
                    continue
                }
            }
        }

        if (col === shrinkCol - 1 || row === shrinkRow - 1) {
            grown = !grown
            i--
        }

    }

    return array
};