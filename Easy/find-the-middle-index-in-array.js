/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    if (nums.length === 1) return 0;
    let sum = nums.reduce((partialSum, a) => partialSum + a, 0);
    let carry = 0
    for (let i = 0; i < nums.length; i++) {
        if (carry === sum - nums[i]) return i
        else {
            if (i === nums.length - 1) return -1;
            else {
                carry += nums[i]
                sum -= nums[i]
            }
        }
    }
    if (carry !== 0) return -1;
};
