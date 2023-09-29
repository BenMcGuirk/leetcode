//given the root of a binary tree, return the inorder traversal of its nodes' values

const { c } = require("tar");

//example 1:
//input: root = [1,null,2,3]
//output: [1,3,2]

//example 2:
//input: root = []
//output: []

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var inorderTraversal = function(root) {
    let treeArray = [];
    function inOrder(root) {
        if(!root){
            return;
        }
        inOrder(root.left);
        treeArray.push(root.val);
        inOrder(root.right);
    }
    inOrder(root);

    return treeArray;
};

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(inorderTraversal(root)); //expected output: [1,3,2]
