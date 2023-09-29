//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.
//Example 1:
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Output: Because nums[0] + nums[1] == 9, we return [0, 1].

//Solution 1
//Time Complexity: O(n^2)
//Space Complexity: O(1)
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target && i !== j){
                return [i, j]
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9));

//Solution 2(my attempt)
//Time Complexity: O(n)
//Space Complexity: O(n)
var twoSum2 = function(nums, target) {
    let seen = new set();
    for(let i = 0; i < nums.length; i++) {
        const complementary = target - [i];
        if(seen.has(complementary)) {
            return [seen.indexOf(target - [i]), i]
        }
        else {
            seen.push([i]);
        }
    }
};

console.log(twoSum2([2,7,11,15], 9));

//Solution 3(copilot)
//Time Complexity: O(n)
//Space Complexity: O(n)
var twoSum3 = function(nums, target) {
    let seen = new Map();
    for(let i = 0; i < nums.length; i++) {
        const complementary = target - nums[i];
        if(seen.has(complementary)) {
            return [seen.get(complementary), i]
        }
        else {
            seen.set(nums[i], i);
        }
    }
};


//practice
const twoSum4 = function(nums, target) {
    let seen = new Map();
    for(let i = 0; i < nums.length; i++) {
        const complementary = target - nums[i];
        if(seen.has(complementary)) {
            return[seen.get(complementary), i];
        }
        else {
            seen.set(nums[i], i);
        }
    }
};