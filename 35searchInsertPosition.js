//given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//You must write an algorithm with O(log n) runtime complexity.

//Example 1:
//Input: nums = [1,3,5,6], target = 5
//Output: 2

//Example 2:
//Input: nums = [1,3,5,6], target = 2
//Output: 1

//my solution
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  var recursion = function() {
    let mid = Math.floor(right/2);
    if(nums[mid] === target) {
        return mid;
      } else if(nums[mid] > target) {
        right = mid-1;
        recursion();
      } else {
        left = mid+1;
        recursion();
      }

      if(right-left < 2) {
        return right;
    }
  }
  recursion();
};

//better solution
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while(left <= right) {
    let mid = Math.floor((left+right)/2);
    if(nums[mid] === target) {
      return mid;
    } else if(nums[mid] > target) {
      right = mid-1;
    } else {
      left = mid+1;
    }
  }
  return left;
};