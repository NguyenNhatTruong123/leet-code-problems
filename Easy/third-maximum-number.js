/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let newSet = new Set(nums)
    let newArr = Array.from(newSet).sort((a, b) => a - b);

    if (newArr.length < 3) return newArr[newArr.length - 1]
    return newArr[newArr.length - 3]
};