/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    for (let i = 0; i <= nums.length; i++) {
        let index = nums.indexOf(nums[i], i + 1)
        if (index !== -1 && index - i <= k) return true
    }

    return false
};