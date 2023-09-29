//Given an integer array 'nums' sorted in non-decreasing order, remove duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array 'nums'. More formally, if there are k elements after removing the duplicates, then the first k elements of 'nums' should hold the final result. It does not matter what you leave beyond the first k elements.
//Return k after placing the final result in the first k slots of 'nums'.

//solution 1
//time O(n) | space O(1)
const removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }
  return i + 1;
};

console.log(removeDuplicates([1, 1, 2])); //2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //5