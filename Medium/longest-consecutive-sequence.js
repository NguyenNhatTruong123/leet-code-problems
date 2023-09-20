/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0
    nums.sort(function (a, b) {
        return a - b;
    });

    nums = [...new Set(nums)]

    let re = 1
    let maxLen = 1
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i + 1] - nums[i] === 1) {
            re++
        } else {
            if (re >= maxLen) {
                maxLen = re
            }
            re = 1
        }
    }

    if (maxLen > 1) return maxLen
    return 1
};