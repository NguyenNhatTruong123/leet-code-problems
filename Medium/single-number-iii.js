/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let re = []
    let dup = []
    nums.sort()
    while (nums.length > 0) {
        let a = nums.shift()
        if (nums.indexOf(a) === -1 && dup.indexOf(a) === -1) {
            re.push(a)
        } else {
            dup.push(a)
        }
    }
    return re
};