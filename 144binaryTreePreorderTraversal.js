//given the root of a binary tree, return the preorder traversal of its nodes' values

// Input: root = [1,null,2,3]
// Output: [1,2,3]

// Input: root = []
// Output: []

// Input: root = [1]
// Output: [1]

//my solution
//recursion

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var preorderTraversal = function (root) {
    let path = [];

    var recurse = function(node) {
        if(!node){
            return;
        } 
        path.push(node.val);

        recurse(node.left);
        recurse(node.right);
    }
    recurse(root);

    return path;
}

console.log(preorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null)))); // [1,2,3]
console.log(preorderTraversal(null)); // Empty tree
console.log(preorderTraversal(new TreeNode(1))); // Single node tree
