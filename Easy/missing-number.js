/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let max = nums.length
    let maxSum = max * (max + 1) / 2
    return maxSum - nums.reduce((a, b) => a + b, 0)
};