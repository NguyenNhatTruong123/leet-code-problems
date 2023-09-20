/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let sortArr = [...score].sort((a, b) => (a > b ? -1 : 1))
    let re = []
    for (let i = 0; i < score.length; i++) {
        let index = sortArr.indexOf(score[i])
        if (index == 0) re[i] = "Gold Medal"
        else if (index == 1) re[i] = "Silver Medal"
        else if (index == 2) re[i] = "Bronze Medal"
        else re[i] = (index + 1).toString()
    }
    return re
};