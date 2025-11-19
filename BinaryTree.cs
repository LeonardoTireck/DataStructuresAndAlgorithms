BinaryTree tree = new BinaryTree();
tree.Insert(5);
tree.Insert(2);
tree.Insert(7);
tree.Insert(1);
tree.Insert(8);

tree.InOrderTransversal();

public class Node
{
    public int Data;
    public Node? left = null;
    public Node? right = null;

    public Node(int data)
    {
        Data = data;
    }
}

public class BinaryTree
{
    public Node? Root = null;

    public BinaryTree() { }

    public void Insert(int data)
    {
        if (Root == null)
            Root = new Node(data);
        else
        {
            InsertRecursive(data, Root);
        }
    }

    public void InOrderTransversal()
    {
        InOrderTransversalRecursive(Root);
        Console.WriteLine();
    }

    private void InOrderTransversalRecursive(Node? node)
    {
        if (node == null)
            return;

        InOrderTransversalRecursive(node.left);
        Console.WriteLine(node.Data);
        InOrderTransversalRecursive(node.right);
    }

    public void InsertRecursive(int data, Node node)
    {
        if (data < node.Data)
        {
            if (node.left == null)
            {
                node.left = new Node(data);
            }
            else
            {
                InsertRecursive(data, node.left);
            }
        }
        else
        {
            if (node.right == null)
            {
                node.right = new Node(data);
            }
            else
            {
                InsertRecursive(data, node.right);
            }
        }
    }

    public bool Search(int data)
    {
        return SearchRecursive(Root!, data);
    }

    private bool SearchRecursive(Node node, int data)
    {
        if (node == null)
            return false;
        if (node.Data == data)
            return true;
        else if (data < node.Data)
        {
            return SearchRecursive(node.left!, data);
        }
        else
        {
            return SearchRecursive(node.right!, data);
        }
    }
}
