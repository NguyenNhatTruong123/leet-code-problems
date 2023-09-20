/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return [[]]
    let re = [[1]]
    for (let i = 2; i <= numRows; i++) {
        let count = 0
        let tmp = []
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) tmp.push(1)
            else {
                tmp.push(re[i - 2][count] + re[i - 2][count + 1])
                count++
            }
        }
        re.push(tmp)
    }

    return re
};
