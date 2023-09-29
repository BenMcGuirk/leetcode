//given an array 'prices' where 'prices[i]' is the price of a given stock on the ith day
//design an algorithm to find the maximum profit from buying and selling one stock

//example 1:
//input: prices = [7,1,5,3,6,4]
//output: 5
//explanation: buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5

//example 2:
//input: prices = [7,6,4,3,1]
//output: 0
//explanation: in this case, no transactions are done and the max profit = 0


//my brute force solution

var maxProfit = function(prices) {
    let profit = 0;

    for(let i = 0; i < prices.length -2; i++) {
        for(let j = prices.length -1; j > i; j--) {
            let diff = prices[j] - prices[i];
            if(diff > profit) {
                profit = diff;
            }
        }
    }
    return profit;
}

console.log(maxProfit([7,6,4,3,1])); //0
console.log(maxProfit([7,1,5,3,6,4])); //5


//optimized solution
//time complexity: O(n)
//space complexity: O(1)

var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        } else if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
}