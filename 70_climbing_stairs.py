"""
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you 
climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
"""

def climbing_stairs(n):
    if n == 1:
        return 1
    if n == 2:
        return 2
    
    ways = climbing_stairs(n-1) + climbing_stairs(n-2)
    return ways

print(climbing_stairs(5)) # 8
print(climbing_stairs(10)) # 89
print(climbing_stairs(20)) # 10946