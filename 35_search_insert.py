"""
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
"""
import math
class Solution(object):
    def search_insert(self, nums, target):
        if target < nums[0]:
            return 0
        elif target > nums[-1]:
            return len(nums)    

        L = 0
        R = len(nums) - 1
        mid = math.ceil((L + R) / 2)
        while L <= R:
            if nums[mid] == target:
                return mid
            elif target < nums[mid] and target > nums[mid - 1]:
                return mid
            elif target > nums[mid] and target < nums[mid + 1]:
                return mid + 1
            
            elif target < nums[mid - 1]:
                R = mid - 2
            elif target > nums[mid + 1]:
                L = mid + 2
            mid = math.ceil((L + R) / 2)

print(Solution().search_insert([1,3,5,6], 5)) # 2
print(Solution().search_insert([1,3,5,6], 2)) # 1
print(Solution().search_insert([1,3,5,6], 7)) # 4
print(Solution().search_insert([1,3,5,6], 0)) # 0   