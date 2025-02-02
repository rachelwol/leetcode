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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(root == null)
        return [];
    const avgLevel = [];
    const levesQueue = [root];
    while(levesQueue.length > 0){
        let level = levesQueue.length;
        let sum = 0;
        for(let i=0; i< level; i++){
            let curr = levesQueue.shift();
            sum += curr.val;
            if(curr.left!=null){
                levesQueue.push(curr.left);
            }
            if(curr.right!=null){
                levesQueue.push(curr.right);
            }
        }
        avgLevel.push(sum/level);
    }
    return avgLevel;
};