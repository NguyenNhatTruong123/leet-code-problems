/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++
            if (i === nums.length - 1 && count >= max) {
                return count
            }
        }
        else {
            if (count >= max) max = count
            count = 0
        }
    }

    return max
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))