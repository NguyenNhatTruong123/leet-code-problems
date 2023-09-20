/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let re = []
    for (let i = 0; i < nums.length; i++) {
        let range = nums[i].toString()
        let j = i + 1
        let check = false
        while (nums[j] - nums[i] === 1) {
            j++
            i++
            check = true
        }

        if (check) range += "->" + nums[j - 1].toString()
        re.push(range)
        check = false
    }
    return re
};