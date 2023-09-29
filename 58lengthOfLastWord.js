//given a string s consisting of words and spaces, return the length of the last word in the string. If the last word does not exist, return 0.
//A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5

// Example 2:
// Input: s = " "
// Output: 0

//my solution
var lengthOfLastWord = function(s) {
    let count = 0;
    for(let i = s.length-1; i >= 0; i--) {
        if(s.charAt(i) !== ' ') {
        count++;
        } else if(count > 0) {
            break;
        }
  } 
  return count;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord(" "));
console.log(lengthOfLastWord("a "));