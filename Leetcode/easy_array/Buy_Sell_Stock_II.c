/**
* Instructions:
* Say you have an array for which the ith element is the price of a given stock on day i. Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
* (https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
* LEVEL: EASY

* Example:
* Input: [7,1,5,3,6,4]
* Output: 7
* Explanation:  Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
                Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
**/

///////////////////////////////////////////////// C Solution (Runtime: 0 ms)
int     maxProfit(int* prices, int pricesSize) {
    int profit;
    int i;
    
    profit = 0;
    i = 0;
    while (i < pricesSize - 1)
    {
        if (prices[i] < prices[i + 1])
            profit += (prices[i + 1] - prices[i]);
        i++;
    }
    return (profit);
}
///////////////////////////////////////////////// JS Solution (Runtime: 60 ms)
var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 0; i < prices.length - 1; i++)
        {
            if (prices[i] < prices[i + 1])
                profit += prices[i + 1] - prices[i];
        }
    return (profit);
};
////////////////////////////////////////////////