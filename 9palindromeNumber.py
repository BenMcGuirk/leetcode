"""
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
"""

def isPalindrome(x):
    nums = str(x)
    arr = [val for val in nums]
    left = 0
    right = len(arr) - 1
    while left < right:
        if arr[left] != arr[right]:
            return False
        left += 1
        right -= 1
    return True

print(isPalindrome(121)) # True
print(isPalindrome(-121)) # False
print(isPalindrome(10)) # False
print(isPalindrome(-101)) # False
print(isPalindrome(11)) # True