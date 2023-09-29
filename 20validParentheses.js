//given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//An input string is valid if:
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket must have a corresponding open bracket of the same type.

//Example 1:
//Input: "()"
//Output: true
//Example 2:
//Input: "()[]{}"
//Output: true
//Example 3:
//Input: "(]"
//Output: false

//Solution 1: Using stack
//Time Complexity: O(n)
//Space Complexity: O(n)
var isValid = function(s) {
    let stack = [];
    let map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(map[s[i]]);
        } else {
            if (stack.pop() !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid("()[]{}")); //true
console.log(isValid("([)]")); //false