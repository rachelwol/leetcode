public class Solution {
    public int MaxProfit(int[] prices) {
        if(prices == null || prices.Length < 2){
            return 0;
        }
        int sumPrefit = 0;
        for(int i=1;i<prices.Length;i++){
            if(prices[i] > prices[i-1]){
                sumPrefit += prices[i] - prices[i-1];
            }
        }
        return sumPrefit;
    }
}