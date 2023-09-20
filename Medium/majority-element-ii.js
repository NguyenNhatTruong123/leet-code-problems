/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let n = nums.length
    if (n < 1) return []
    if (n < 2) return nums

    let arr = {}
    let re = []

    for (let i = 0; i < n; i++) {
        if (arr[nums[i]]) arr[nums[i]]++
        else arr[nums[i]] = 1
    }

    for (let key in arr) {
        if (arr[key] > n / 3) re.push(parseInt(key))
    }

    return re
};
