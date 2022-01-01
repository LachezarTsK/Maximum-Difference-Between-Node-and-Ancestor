
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
    return findMaxDifference(root, root.val, root.val);
};

/**
 * @param {TreeNode} root
 * @param {number} max
 * @param {number} min  
 * @return {number}
 */
function findMaxDifference(root, max, min) {
    if (root === null) {
        return max - min;
    }

    max = Math.max(max, root.val);
    min = Math.min(min, root.val);
    let left = findMaxDifference(root.left, max, min);
    let right = findMaxDifference(root.right, max, min);

    return Math.max(left, right);
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
