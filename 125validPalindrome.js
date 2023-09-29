//a phrase is a palindrome if it reads the same backwards as forwards
//convert the phrase to lowercase and remove all non-alphanumeric characters
//return true if the phrase is a palindrome, false if not

//input: string
//output: boolean

//example 1:
//'A man, a plan, a canal: Panama' => true

//example 2:
//'race a car' => false

//my attempt

var isPalindrome = function(s) {
    let result = s.replace(/[^A-Za-z]/g, '').toLowerCase();

    for(let i = 0, j = result.length-1; i <= j; i++, j--) {
        if(result[i] != result[j]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); //true
console.log(isPalindrome('race a car')); //false