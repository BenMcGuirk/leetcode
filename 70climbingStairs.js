//you are climbing a stair case. It takes n steps to reach to the top.
//each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

//note: given n will be a positive integer

//example 1:
//input: 2
//output: 2
//explanation: there are two ways to climb to the top
//1. 1 step + 1 step
//2. 2 steps

//example 2:
//input: 3
//output: 3
//explanation: there are three ways to climb to the top
//1. 1 step + 1 step + 1 step
//2. 1 step + 2 steps
//3. 2 steps + 1 step

//my aided attempt
var climbStairs = function(n) {
    let ways = [1, 2];
    
    for (let i = 2; i < n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }
    
    return ways[n - 1];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(10));