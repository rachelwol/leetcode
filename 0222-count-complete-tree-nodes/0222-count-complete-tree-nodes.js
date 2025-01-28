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
var countNodes = function (root) {
    if (!root) return 0;
    const leftHeight = getLeftHeight(root.left);
    const rightHeight = getRightHeight(root.right);
    if (leftHeight === rightHeight) {
        return Math.pow(2, leftHeight + 1) - 1;
    } else {
        return 1 + countNodes(root.left) + countNodes(root.right) 
    }
};
function getLeftHeight(root) {
    if (root == null) return 0;
    return 1 + getLeftHeight(root.left);
}

function getRightHeight(root) {
    if (root == null) return 0;
    return 1 + getRightHeight(root.right);
}