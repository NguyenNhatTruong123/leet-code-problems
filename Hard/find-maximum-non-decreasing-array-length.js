/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumLength = function (nums) {
    const n = nums.length;
    const dp = Array(n).fill(1);
    let maxLength = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] >= nums[i - 1]) {
            dp[i] = dp[i - 1] + 1;
        }

        maxLength = Math.max(maxLength, dp[i]);
    }

    return maxLength;
};