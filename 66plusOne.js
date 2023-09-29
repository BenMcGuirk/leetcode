//you are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
//The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
//Increment the large integer by one and return the resulting array of digits.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]

// Example 3:
// Input: digits = [9,9,9]
// Output: [1,0,0,0]

//my attempt 
var plusOne = function(digits) {
    let i = digits.length -1;
    if(digits[i] === 9) {
        if(!digits[i-1]) {
            i++;
            digits[i] = 0;
            digits[i-1] = 1;
        } else {
            digits[i] = 0;
            digits[i-1]++;
        }
    } else{
        digits[i]++;
    }
    return digits;
};

//console.log(plusOne([4,3,2,1]));
//console.log(plusOne([1,2,3]));
//console.log(plusOne([9]));
//console.log(plusOne([7,9]));
//console.log(plusOne([9,9]));



//my attempt 2
var plusOne = function(digits) {
    if(digits[digits.length-1] === 9) {
        for(let i = digits.length-1; i >= 0; i--) {
            if(!digits[i-1]) {
                if(digits[i] === 9){
                    i++;
                    digits[i] = 0;
                    digits[i-1] = 1;
                    i--;
                }
            } else {
                digits[i] = 0;
                digits[i-1]++;
                if(i-1 === 0 && digits[i-1] === 10) {
                    digits[i-1] = 0;
                    digits.unshift(1);
                }
            }
        }
    } else {
        digits[digits.length-1]++;
    }
    return digits;
};

console.log(plusOne([4,3,2,1]));
console.log(plusOne([1,2,3]));
console.log(plusOne([9]));
console.log(plusOne([7,9]));
console.log(plusOne([9,9]));
console.log(plusOne([9,9,9,9]));