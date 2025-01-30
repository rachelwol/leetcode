/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ones = 0, twos = 0, thrice = 0;
    for(let num of nums){
        twos |= num & ones;
        ones ^= num;
        thrice = ~(ones & twos);
        ones &= thrice;
        twos &= thrice;
    }
    return ones;
};