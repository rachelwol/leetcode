/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length < 1 || nums.length > 6) return [];
    let result = [];
    function permutation(nums, prefix = [], result = []){
        if(nums.length === 0) {
            result.push([...prefix]);
            return;
        }
        for(let i = 0; i< nums.length; i++){
            const newNums = [...nums.slice(0,i), ...nums.slice(i+1)];
            permutation(newNums, [...prefix, nums[i]], result);
        }
    }
    permutation(nums, [], result); 
    return result;
};