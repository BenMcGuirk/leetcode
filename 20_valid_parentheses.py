"""
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
"""

# initialize dictionary to pair parentheses.

dict = {
    '(': ')',
    '{': '}',
    '[': ']'
}

# loop through s

def validP(s):
    openStack = []
    for i in s:
        if i in dict:
            openStack.append(i)
        elif i == dict[openStack[-1]]:
            openStack.pop
        else:
            return False
    return True

print(validP('()')) # True
print(validP('()[]{}')) # True
print(validP('(]')) # False