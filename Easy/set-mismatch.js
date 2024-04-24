/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let n = nums.length
    let check = false
    let re = [0, 0]
    for (let i = 0; i < n; i++) {
        if (nums[i] === re[1]) { check = false }
        if (nums[i] !== i + 1 && !check) {
            re[1] = i + 1
            check = !check
        }
        if (nums[i] === nums[i + 1]) re[0] = nums[i]
    }
    return re
};

console.log(findErrorNums([3, 2, 3, 4, 6, 5]));