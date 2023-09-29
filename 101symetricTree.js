//given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

var symetricTree = function(root) {

    function recursion(l, r) {
        if(!l && !r) return true;
        if(!l || !r || l.val != r.val) return false;

        return recursion(l.left, r.right) && recursion(l.right, r.left);
    }
    recursion(root.left, root.right);
}