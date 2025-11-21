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
    public IList<int> InorderTraversal(TreeNode root)
    {
        List<int> sln = [];
        if (root == null)
            return sln;
        InOrderRecursive(root);

        return sln;

        void InOrderRecursive(TreeNode node)
        {
            if (node == null)
            {
                return;
            }
            InOrderRecursive(root.left);
            sln.Add(root.val);
            InOrderRecursive(root.right);
        }
    }
}
