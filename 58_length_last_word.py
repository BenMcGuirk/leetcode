"""
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
"""

def length_last_word(s):
    length = 0
    for i in range(len(s) -1, -1, -1):
        if s[i] != ' ':
            length += 1
        
        if s[i] == ' ' and length > 0:
            return length
        

print(length_last_word('Hello World')) # 5
print(length_last_word('Hello World  ')) # 5
print(length_last_word('Hello World  123')) # 3