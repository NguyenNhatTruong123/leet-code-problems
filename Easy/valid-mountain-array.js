/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length < 3) return false
    let isUp = true
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            if (i === 0) return false
            isUp = false
        }
        if (isUp && arr[i] >= arr[i + 1] || !isUp && arr[i] <= arr[i + 1]) return false
    }
    if (isUp) return false
    return true
};

console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))