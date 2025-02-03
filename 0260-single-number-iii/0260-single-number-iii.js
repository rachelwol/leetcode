/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let sumXor = 0;
    for(let num of nums){
        sumXor ^= num;
    }
    const rightBit = sumXor & -sumXor;
    let num1 = 0, num2 = 0;
    for(let num of nums){
        if(num & rightBit){
            num1 ^= num;
        }
        else{
            num2 ^= num;
        }
    }
    return [num1, num2];
};