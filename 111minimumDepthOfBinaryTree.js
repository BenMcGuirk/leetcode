//given a binary tree, find its minimum depth
//the minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node
//note: a leaf is a node with no children

//example:
//given binary tree [3,9,20,null,null,15,7]
//return its minimum depth = 2

//my solution:
var minDepth = function(root) {
  if(!root) return 0;

  let current = 1;
  let mDepth = null;
  
  var recurse = function(root) {
    if(!root.left && !root.right) {
        if(mDepth === null || current < mDepth) {
            mDepth = current;
        }
        return;
    } 
    
    if (root.left) {
      current++;
      recurse(root.left);
      current--;
    }

    if (root.right) {
      current++;
      recurse(root.right);
      current--;
    }
  }
  recurse(root);
  return mDepth;
};

//leetcode solution:
var minDepth = function(root) {
    if(!root) return 0;
    if(!root.left) return minDepth(root.right) + 1;
    if(!root.right) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};