"""
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

iterate through array.
iterate through each string.
initialize first word.
if all ith letters are equal, append letter to prefix.
"""

def longestPref(strings):
    if len(strings) <= 1:
        return ""
    prefix = strings[0]
    for i in range(1, len(strings)):
        while strings[i].find(prefix) != 0:
            prefix = prefix[0: len(prefix) - 1]
            if len(prefix) == 0:
                return ""
    return prefix

print(longestPref(["flower","flow","flight"])) # "fl"
print(longestPref(["dog","racecar","car"])) # ""
print(longestPref(["ab","a"])) # "a"
print(longestPref(["a"])) # ""