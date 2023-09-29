//given a binary tree, determine if it is height-balanced
//for this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1

//my solution
var isBalanced = function(root) {
    if(root === null){
        return true;
    };

    let currentLeft = 0;
    let currentRight = 0;
    let maxLeft = 0;
    let maxRight = 0;

    var recurseRight = function(root) {
    //calculate heights of left and right subtrees
        if(root.right) {
            currentRight++;
            if(currentRight > maxRight) {
                maxRight = currentRight;
            };
        };

        if(root.left) {
            currentLeft++;
            if(currentLeft > maxRight) {
                maxRight = currentLeft;
            };
        };
    };

    var recurseLeft = function(root) {
        //calculate heights of left and right subtrees
        if(root.right) {
            currentRight++;
            if(currentRight > maxLeft) {
                maxLeft = currentRight;
            };
        };
    
        if(root.left) {
            currentLeft++;
            if(currentLeft > maxLeft) {
                maxLeft = currentLeft;
            };
        };

    //calculate their difference
    let difference = maxLeft - maxRight;
    //if difference is greater than 1, return false, else return true
    if(difference > 1 || difference < -1) {
        return false;
    } else {
        return true;
    };
  };
  recurse();
};










//new attempt
var isBalanced = function(root) {
    let current = 1;
    let mRight = 0;
    let mLeft = 0;

    //calculate max depths of each side
    var recurseRight = function() {
        if(root.right || root.left) {
            current++;
            if(current > mRight) {
                mRight = current;
            }
        } else {
            return;
        }
        recurseRight(root.right);
        recurseRight(root.left);
    };

    var recurseLeft = function() {
        if(root.right || root.left) {
            current++;
            if(current > mLeft) {
                mLeft = current;
            }
        } else {
            return;
        }
        recurseLeft(root.left);
        recurseLeft(root.right)
    }
    recurseRight(root.right);
    recurseLeft(root.left);

    //calculate depth difference between left and right
    let difference = mLeft - mRight;
    if(difference > 1 || difference < -1) {
        return false;
    } else {
        return true;
    };
};


//copilot solution
var isBalanced = function(root) {
    //if root is null, return true
    if(root === null) {
        return true;
    }
    
    //get height of left and right subtrees
    let left = getHeight(root.left);
    let right = getHeight(root.right);
    
    //if difference is greater than 1, return false, else return true
    if(Math.abs(left - right) > 1) {
        return false;
    }
    
    //recurse through left and right subtrees
    return isBalanced(root.left) && isBalanced(root.right);
}

//helper function to get height of subtrees
function getHeight(root) {
    //if root is null, return 0
    if(root === null) {
        return 0;
    }
    
    //return max height of left and right subtrees
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
};