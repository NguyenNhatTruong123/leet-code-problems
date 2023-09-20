/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let sorted = nums.slice().sort((a, b) => a - b)
    let list = {}
    for (let i = 0; i < sorted.length; i++) {
        if (list[sorted[i]] === undefined) list[sorted[i]] = i
    }

    let re = []
    for (let i = 0; i < nums.length; i++) {
        re.push(list[nums[i]])
    }
    return re
};
