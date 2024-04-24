/**
 * @param {number} n
 * @param {number} p
 * @param {number[]} banned
 * @param {number} k
 * @return {number[]}
 */
var minReverseOperations = function (n, p, banned, k) {
    const arr = Array(n).fill(0);
    arr[p] = 1;

    const ans = Array(n).fill(-1);
    ans[p] = 0;

    const queue = [];
    queue.push({ state: arr, operations: 0 });

    const visited = Array(n).fill(false);
    visited[arr.join('')] = true;

    while (queue.length > 0) {
        const { state, operations } = queue.shift();

        if (state[p] === 1) {
            ans[p] = operations;
            continue;
        }

        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                const newState = state.slice();
                newState.reverse(i, j + 1);

                if (!visited[newState.join('')] && !banned.includes(i)) {
                    queue.push({ state: newState, operations: operations + 1 });
                    visited[newState.join('')] = true;
                }
            }
        }
    }

    return ans;
};

console.log(minReverseOperations(4, 0, [1, 2], 4))