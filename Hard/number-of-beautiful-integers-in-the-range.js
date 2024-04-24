/**
 * @param {number} low
 * @param {number} high
 * @param {number} k
 * @return {number}
 */
var numberOfBeautifulIntegers = function (low, high, k) {
    const dp = Array(high.toString().length).fill().map(() => Array(2).fill(-1));

    function countBeautiful(num, pos, rem) {
        if (pos === num.length) {
            return 0;
        }

        if (dp[pos][rem] !== -1) {
            return dp[pos][rem];
        }

        let ans = 0;

        for (let i = 0; i <= 9; i++) {
            const newRem = (rem + (i * Math.pow(10, pos)) % k) % k;

            if (pos === 0 && i === 0) {
                continue;
            }

            ans += countBeautiful(num, pos + 1, newRem);
        }

        dp[pos][rem] = ans;
        return ans;
    }

    const countHigh = countBeautiful(high.toString(), 0, 0);
    const countLow = countBeautiful((low - 1).toString(), 0, 0);

    return countHigh - countLow;
};