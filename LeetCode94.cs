public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;

    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution
{
    private List<int> sln = [];

    public IList<int> InorderTraversal(TreeNode root)
    {
        if (root == null)
            return sln;
        InorderTraversal(root.left);
        sln.Add(root.val);
        InorderTraversal(root.right);
        return sln;
    }
}
