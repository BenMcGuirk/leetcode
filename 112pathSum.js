//given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum
//a leaf is a node with no children

//input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
//output: true

//input: root = [1,2,3], targetSum = 5
//output: false

//my solution:
var hasPathSum = function(root, targetSum) {
    if(!root) {
        return false;
    }

    let addsToTarget = false;
    let sum = 0;

    var recurse = function() {
        if(!root.left && !root.right) {
            sum += root;
            if(sum === targetSum) {
                addsToTarget = true;
            }
            sum -= root;
            return;
        }

        if(root.left) {
            sum += root;
            recurse(root.left);
            sum -= root;
        }

        if(root.right) {
            sum += root;
            recurse(root.right);
            sum -= root;
        }
    }
    recurse(root);
    return addsToTarget;
};




//leetcode solution:
var hasPathSum = function(root, targetSum) {
    if(!root) {
        return false;
    }

    if(!root.left && !root.right) {
        return targetSum === root.val;
    }

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};