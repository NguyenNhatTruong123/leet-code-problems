/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    while (nums.length > 0) {
        let first = nums[0]
        nums.shift()
        if (nums.indexOf(first) != -1) {
            return true
        }
    }
    return false
};