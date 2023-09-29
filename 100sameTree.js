//given two binary trees p and q, write a function to check if they are the same or not
//two binary trees are considered the same if they are structurally identical and the nodes have the same value

//example 1
//input: p = [1,2,3], q = [1,2,3]
//output: true

//example 2
//input: p = [1,2], q = [1,null,2]
//output: false

//solution:
var isSameTree = function(p, q) {
    if(p === null && q === null) {
        return true;
    }
    if(p === null || q === null) {
        return false;
    }
    if(p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};