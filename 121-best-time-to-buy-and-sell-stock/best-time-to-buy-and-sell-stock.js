/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let MaxPro = 0;

    for(curPrice of prices){
        if(curPrice < minPrice){
            minPrice = curPrice
        }

        if(curPrice - minPrice > MaxPro){
            MaxPro = curPrice - minPrice
        }
    }

    return MaxPro 
    
};