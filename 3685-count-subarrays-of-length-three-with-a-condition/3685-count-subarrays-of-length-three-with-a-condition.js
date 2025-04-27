/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let sum = 0;
    for(let i=0;i<nums.length-2;i++){
        let half = nums[i+1]/2;
        if(nums[i]+nums[i+2] == half){
            sum++;
        }
    }
    return sum;
};