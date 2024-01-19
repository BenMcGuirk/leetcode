"""
Given the roots of two binary trees p and q, write a function to check if they are 
the same or not.
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

def same_tree(array1, array2):
    tree1 = arrayToTree(array1)
    tree2 = arrayToTree(array2)

    if tree1 == None and tree2 == None:
        return True

    def recurse(node1, node2):
        #stopping conditions:
        if node1 == None and node2 == None:
            return
        elif node1.val != node2.val:
            return False
        else: 
            recurse(node1.left, node2.left)
            recurse(node1.right, node2.right)
        return True
    
    return recurse(tree1, tree2)

print(same_tree([1, None, 2, 3], [1, None, 2, 3])) # True
print(same_tree([], [])) # True
print(same_tree([1], [1])) # True
print(same_tree([1, 2], [5, 2])) # False