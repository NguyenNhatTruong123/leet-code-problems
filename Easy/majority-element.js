/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let set = {}
    for (let i = 0; i < nums.length; i++) {
        if (set[nums[i]] === undefined) {
            set[nums[i]] = 1
        } else {
            set[nums[i]]++
        }

        if (set[nums[i]] > nums.length / 2) return nums[i]
    }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))