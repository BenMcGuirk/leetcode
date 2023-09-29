//given an integer x return true if x is palindrome integer
//an integer is palindrome when it reads the same backward as forward
//for example 121 is palindrome while 123 is not

//my solution
var isPalindrome = function(x) {
    let string = x.toString();
    let L = 0;
    let R = string.length-1;

    if(string.length = 1) return true;

    while(L < R) {
        if(string[L] != string[R]) {
            return false;
        }
        L += 1;
        R -= 1;
    }
    return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(1));

//for the extended question, can you do it without converting x to a string,
//I think the solution is just to return all negatives as false, numbers 0-9 as true,
//and I think all the larger palindromes up from 11 are multiples of 11. So anything divisible by 11 return true also.