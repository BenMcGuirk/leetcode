"""
Given the root of a binary tree, return the inorder traversal of its nodes' values.
"""

class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

def arrayToTree(nums):
    if not nums:
        return None

    root = TreeNode(nums[0])
    queue = [root]
    i = 1

    while i < len(nums):
        node = queue.pop(0)

        left_val = nums[i] if i < len(nums) else None
        right_val = nums[i + 1] if i + 1 < len(nums) else None

        if left_val is not None:
            node.left = TreeNode(left_val)
            queue.append(node.left)

        if right_val is not None:
            node.right = TreeNode(right_val)
            queue.append(node.right)

        i += 2

    return root

def inorder_traversal(array):
    output = []
    #convert array to tree
    tree = arrayToTree(array)
    
    def recurse(node):
        # stopping condition
        if not node:
            return
        recurse(node.left)
        output.append(node.val)
        recurse(node.right)

    recurse(tree)
    return output

print(inorder_traversal([1, None, 2, 3])) # [1, 3, 2]
print(inorder_traversal([])) # []
print(inorder_traversal([1])) # [1]
print(inorder_traversal([1, 2])) # [2, 1]
print(inorder_traversal([1, None, 2])) # [1, 2]