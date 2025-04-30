public class Solution {
    public int MaxProfit(int[] prices) {
        if(prices == null || prices.Length < 2){
            return 0;
        }
        int minPrice = prices[0], maxPrefit = 0;
        for(int i=1;i<prices.Length;i++){
            if(prices[i] <minPrice){
                minPrice = prices[i];
            }
            else{
                if(prices[i]-minPrice > maxPrefit){
                    maxPrefit = prices[i]-minPrice;
                }
            }
        }
        return maxPrefit;
    }
}