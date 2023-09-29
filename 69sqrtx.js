//given a non-negative integer x, compute and return the square root of x rounded down to the nearest integer.
//since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
//you must not use any built-in square root function or operator, such as sqrt().

//example 1:
//input: x = 4
//output: 2

//example 2:
//input: x = 8
//output: 2
//explanation: the square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.


//my attempt
function mySqrt(x) {
    if(x <= 1) {
        return x;
    }
    for(let i = 2; i <= x; i++) {
        if(i * i === x) {
            return i;
        } else if(i * i > x) {
            return i - 1;
        }
    }
}

console.log(mySqrt(4)); //2
console.log(mySqrt(1)); //1
console.log(mySqrt(8)); //2
console.log(mySqrt(14)); //3