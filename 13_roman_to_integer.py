"""
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, 
the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies 
to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
"""

def roman_to_integer(roman):
    nums = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    sum = 0
    for num in range(len(roman)):
        current = nums[roman[num]]

        if num != 0:
            prev = nums[roman[num - 1]]
            if current > prev:
                continue

        if num == len(roman) - 1:
            pass
        else:
            next = nums[roman[num + 1]]
        
        if next > current:
            sum += next - current
        else:
            sum += current
    return sum

print(roman_to_integer('III')) # 3
print(roman_to_integer('IV')) # 4
print(roman_to_integer('IX')) # 9
print(roman_to_integer('LVIII')) # 58
print(roman_to_integer('MCMXCIV')) # 1994
print(roman_to_integer('MMXXI')) # 2021
print(roman_to_integer('MMMCMXCIX')) # 3999