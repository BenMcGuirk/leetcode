"""
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is 
not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
"""

def first_occurrence(haystack, needle):
    condition = False
    x = 0
    y = 0
    while x < len(needle) and y < len(haystack):
        if needle[x] != haystack[y]:
            x = 0
            y += 1
            condition = False
        else:
            x += 1
            y += 1
            condition = True
    if condition == True:
        return y - len(needle)
    else: 
        return -1
    
print(first_occurrence("sadbutsad", "sad")) # 0
print(first_occurrence("sadbutsad", "but")) # 3
print(first_occurrence("sadbutsad", "t")) # 5
print(first_occurrence("sadbutsad", "z")) # -1