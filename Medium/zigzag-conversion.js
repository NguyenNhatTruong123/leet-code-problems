/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// P   A   H   N
// A P L S I I G
// Y   I   R

var convert = function (s, numRows) {
    let arr = {}
    let row = 0, col = 0
    let isDown = true
    Array.from(s).forEach(element => {
        arr = setValue(arr, row, col, element)
        if (isDown) {
            row++
        } else {
            row--
            col++
        }
        if (row === numRows - 1) isDown = false
        if (row === 0 && col !== 0) isDown = true
    });
    let re = ""
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j <= col; j++) {
            if (arr[i][j] !== undefined)
                re += arr[i][j]
        }
    }

    return re
};

function setValue(arr, row, col, value) {
    if (!arr[row]) {
        arr[row] = {};
    }
    arr[row][col] = value;
    return arr
}

console.log(convert("AB", 1));