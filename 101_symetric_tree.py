"""
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
"""
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

def array_to_tree(nums):
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

def symetric_tree(tree1):
    node1 = array_to_tree(tree1).left
    node2 = array_to_tree(tree1).right
    def recurse(node1, node2):
        #stopping conditions:
        if node1 == None and node2 == None:
            return
        elif node1.val != node2.val:
            return False
        recurse(node1.left, node2.right), recurse(node1.right, node2.left)
        return True
    return recurse(node1, node2)

print(symetric_tree([1,2,2,3,4,4,3])) #True