//you are given two sorted arrays, nums1 and nums2, sorted in non-decreading order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//merge nums1 and nums2 into a single array sorted in non-decreasing order
//the final sorted array should not be returned by the function, but instead be stored inside the array nums1. to accomodate this, nums1 has a length of m+n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

//example 1:
//input: nums1 = [1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3
//output: [1,2,2,3,5,6]

//example 2:
//input: nums1=[1], m=1, nums2=[], n=0
//output: [1]

//my attempt 1
var mergeSortedArrays = function(nums1, m, nums2, n){
    let j = 0;
    if(!nums2.length) return nums1;
    if(!nums1.length || nums1[0] === 0) return nums2;
    for(let i = 0; i < n; i++) {
        if(nums1[i] > nums2[j]) {
            nums1.splice(i, 0, nums2[j]);
            nums2.shift(nums2[j]);
        }
        nums1.pop();
    }

    nums1 = nums1.concat(nums2);
    return nums1;
};

console.log(mergeSortedArrays([1, 0], 1, [1], 1)); //expected output: [1,1]

//console.log(mergeSortedArrays([4,0,0,0,0,0], 1, [1,2,3,5,6], 5)); //expected output: [1,2,3,4,5,6]
//console.log(mergeSortedArrays([1,2,3,0,0,0], 3, [2,5,6], 3)); //expected output: [1,2,2,3,5,6]
//console.log(mergeSortedArrays([1], 1, [], 0)); //expected output: [1]
//console.log(mergeSortedArrays([0], 0, [1], 1)); //expected output: [1]
//console.log(mergeSortedArrays([2,0], 1, [1], 1)); //expected output: [1,2]