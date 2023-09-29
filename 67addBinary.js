//given two binary strings return their sum (also a binary string)
//the input strings are both non-empty and contains only characters 1 or 0

const { c } = require("tar");

//input: two strings
//output: one string
//constraints: none

//examples:
//Input: a = "11", b = "1"
//Output: "100"

//Input: a = "1010", b = "1011"
//Output: "10101"

//solution 1:
//create a function that takes in two strings
var addBinary = function(a, b) {
    let sum = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    //loop through the strings
    while (i >= 0 || j >= 0) {
        let aDigit = i >= 0 ? a[i] : '0';
        let bDigit = j >= 0 ? b[j] : '0';
        let digitSum = parseInt(aDigit) + parseInt(bDigit) + carry;
        if (digitSum >= 2) {
            digitSum -= 2;
            carry = 1;
        } else {
            carry = 0;
        }
        sum = digitSum + sum;
        i--;
        j--;
    }
    return sum;
};//***not working */

//solution 2:
//create a function that takes in two strings
var addBinary = function(a, b) {
    //create a variable to hold the sum
    let sum = '';
    //create a variable to hold the carry
    let carry = 0;
    //create a variable to hold the length of the first string
    let i = a.length - 1;
    //create a variable to hold the length of the second string
    let j = b.length - 1;

    //loop through the strings
    while (i >= 0 || j >= 0) {
        //create a variable to hold the first digit
        let aDigit = i >= 0 ? a[i] : '0';
        //create a variable to hold the second digit
        let bDigit = j >= 0 ? b[j] : '0';
        //create a variable to hold the sum of the digits
        let digitSum = parseInt(aDigit) + parseInt(bDigit) + carry;
        //if the digit sum is greater than or equal to 2
        if (digitSum >= 2) {
            //subtract 2 from the digit sum
            digitSum -= 2;
            //set the carry to 1
            carry = 1;
        } else {
            //set the carry to 0
            carry = 0;
        }
        //set the sum equal to the digit sum plus the sum
        sum = digitSum + sum;
        //decrement i
        i--;
        //decrement j
        j--;
    }
    sum = carry + sum;
    //return the sum
    return sum;
};

console.log(addBinary('11', '1'));//'100'
console.log(addBinary('1010', '1011'));//'10101'