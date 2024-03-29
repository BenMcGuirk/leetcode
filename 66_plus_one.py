"""
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain 
any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
"""

def plus_one(digits):
    digits[-1] += 1
    for num in range(len(digits)-1, 0, -1):
        if digits[num] == 10:
            digits[num] = 0
            digits[num-1] += 1

    if digits[0] == 10:
        digits[0] = 0
        digits.insert(0, 1)

    return digits

print(plus_one([1,2,3])) # [1,2,4]
print(plus_one([1,2,9])) # [1,3,0]
print(plus_one([9,9,9])) # [1,0,0,0]
print(plus_one([9,9,8])) # [9,9,9]
print(plus_one([9])) # [1,0]