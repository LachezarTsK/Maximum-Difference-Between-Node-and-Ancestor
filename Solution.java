
public class Solution {

    public int maxAncestorDiff(TreeNode root) {
        return findMaxDifference(root, root.val, root.val);
    }

    public int findMaxDifference(TreeNode root, int max, int min) {
        if (root == null) {
            return max - min;
        }

        max = Math.max(max, root.val);
        min = Math.min(min, root.val);
        int left = findMaxDifference(root.left, max, min);
        int right = findMaxDifference(root.right, max, min);

        return Math.max(left, right);
    }
}

class TreeNode {

    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
