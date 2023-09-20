/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let box = [[], [], []]
    for (var i = 0; i < nums.length; i++) {
        box[nums[i]].push(nums[i])
    }
};