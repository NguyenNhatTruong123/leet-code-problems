/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
    let count = 0;

    function dfs(node, countArr) {
        if (!node) {
            return;
        }

        countArr[node.val]++;

        if (!node.left && !node.right) {
            let oddCount = 0;
            for (let i = 1; i <= 9; i++) {
                if (countArr[i] % 2 === 1) {
                    oddCount++;
                }
            }
            if (oddCount <= 1) {
                count++;
            }
        }

        dfs(node.left, countArr);
        dfs(node.right, countArr);

        countArr[node.val]--;
    }

    dfs(root, new Array(10).fill(0));

    return count;
};