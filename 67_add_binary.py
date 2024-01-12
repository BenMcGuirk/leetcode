"""
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"
"""

#non-recursive
def add_binary(a, b):
    output = ''
    carry = 0
    a, b = a[::-1], b[::-1] 

    for i in range(max(len(a), len(b))):
        digitA = int(a[i]) if i < len(a) else 0
        digitB = int(b[i]) if i < len(b) else 0

        total = digitA + digitB + carry
        chr = str(total % 2)
        output = chr + output
        carry = total // 2

    if carry:
        output = '1' + output

    return output
            
print(add_binary('11', '1')) #100
print(add_binary('1010', '1011')) #10101
print(add_binary('0', '0')) #0
print(add_binary('1', '0')) #1
print(add_binary('0', '1')) #1