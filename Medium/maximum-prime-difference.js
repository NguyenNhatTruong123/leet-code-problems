/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function (nums) {
    let range = 0
    let prevIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i])) {
            if (i - prevIndex > range) range = i - prevIndex
            prevIndex = i
        }
    }
    return range
};

var isPrime = function (num) {
    if (num <= 2) return false
    if (num === 2) return true
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(maximumPrimeDifference([1, 7]))