/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    if (n === 1) return [[1]]
    let array = Array(n).fill().map(() => Array(n).fill(0));

    let row = 0
    let col = 0

    let backtrack = []

    let grown = true

    let shrink = n
    let up = 0

    let check = 0

    for (let i = 1; i <= n * n; i++) {
        if (!backtrack.includes(row.toString() + "," + col.toString())) {
            array[row][col] = i
            backtrack.push(row.toString() + "," + col.toString())
        } else {
            if (col === check && row === check) {
                let tmp = backtrack[backtrack.length - 1].split(",")
                row = parseInt(tmp[0])
                col = parseInt(tmp[1])
                shrink--
                up++
                check++
                grown = !grown
                i--
            }
        }
        if (grown) {
            if (col < shrink - 1) {
                col++
                continue
            }
            else {
                if (row < shrink - 1) {
                    row++
                    continue
                }
            }
        } else {
            if (col > up) {
                col--
                continue
            }
            else {
                if (row > up) {
                    row--
                    continue
                }
            }
        }

        if (col === row) {
            grown = !grown
            if (n % 2 === 1 && i === n ** 2) {
                break
            } else {
                i--
            }
        }

    }

    return array
};