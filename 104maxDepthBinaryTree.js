//given the root of a binary tree, return its maximum depth
//a binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node
//ex: [3,9,20,null,null,15,7] => 3
//ex: [1,null,2] => 2

//my attempt
var maxDepth = function(root) {
    let mDepth = 1;
    let current = 1;

    var recurse = function(root) {
        if(root.left || root.right) {
            current++;
            if(current > mDepth) {
                mDepth = current;
            }
        }
        recurse(root.left);
        recurse(root.right);
    }
    return recurse(root);
};