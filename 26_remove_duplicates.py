"""
Remove duplicates from sorted array.
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element 
appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in 
nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
"""
"""
- iterate through nums
- k = len(nums)
- if num and num before are equal, move num to end of array and change to '-'.
- take one away from k
- return k and new array
"""

def remove_duplicates(nums):
    k = len(nums)
    x = 1
    while x < len(nums):
        if nums[x] != '_':
            if nums[x] == nums[x-1]:
                nums.remove(nums[x])
                nums.append('_')
                k -= 1
            else:
                x += 1
        else:
            break
    return f"{k}, nums = {nums}"

print(remove_duplicates([1,1,2])) # 2, nums = [1,2,_]
print(remove_duplicates([0,0,1,1,1,2,2,3,3,4])) # 5, nums = [0,1,2,3,4,_,_,_,_,_]
print(remove_duplicates([1,2,3])) # 3, nums = [1,2,3]
print(remove_duplicates([1,1,1])) # 1, nums = [1,_,_]