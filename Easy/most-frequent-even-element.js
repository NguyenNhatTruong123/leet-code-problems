/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let arr = sortByFrequency(nums)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) return arr[i]
    }
    return -1
};

function sortByFrequency(arr) {
    var frequencyMap = {};

    // Đếm tần suất xuất hiện của mỗi số trong mảng
    arr.forEach(function (num) {
        frequencyMap[num] = frequencyMap[num] ? frequencyMap[num] + 1 : 1;
    });

    // Sắp xếp mảng dựa trên tần suất xuất hiện
    arr.sort(function (a, b) {
        if (frequencyMap[a] === frequencyMap[b]) {
            return a - b; // Sắp xếp tăng dần nếu có cùng tần suất
        } else {
            return frequencyMap[b] - frequencyMap[a]; // Sắp xếp giảm dần theo tần suất
        }
    });

    return arr;
}