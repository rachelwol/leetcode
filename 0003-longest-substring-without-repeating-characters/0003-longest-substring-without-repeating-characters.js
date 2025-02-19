/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    let sumMax = 0;
    let start = 0;
    let charMap = new Map();
    for(let i =0;i<s.length; i++){
        const char = s[i];
        if(charMap.has(char) && charMap.get(char) >= start){
            start = charMap.get(char) + 1;
        }
        charMap.set(char, i);
        sumMax = Math.max(sumMax, i-start+1);
    }
    return sumMax;
};