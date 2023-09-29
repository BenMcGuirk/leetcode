//given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Input: [2,2,1]
// Output: 1

// Input: [4,1,2,1,2]
// Output: 4

// Input: [1]
// Output: 1

//my solution
var singleNumber = function(nums) {
  let single = [];
  
  for(let i = 0; i < nums.length; i++) {
    if(single.includes(nums[i])) {
        let index = single.indexOf(nums[i]);
        single.splice(index, 1);
    }
    else {
        single.push(nums[i]);
    }
  }
  return single[0];
};

console.log(singleNumber([4,1,2,1,2])) //4
console.log(singleNumber([2,2,1])) //1
console.log(singleNumber([1])) //1