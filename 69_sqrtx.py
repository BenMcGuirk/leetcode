"""
Given a non-negative integer x, return the square root of x rounded down to the 
nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 
Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
"""

def sqrt(x):
    l, r = 0, x
    result = 0

    while l <= r:
        m = l + (r - l) // 2
        if m**2 > x:
            r = m - 1
        elif m**2 < x:
            l = m + 1
            result = m
        else: 
            return m
    return result

#print(sqrt(4)) # 2
print(sqrt(8)) # 2