/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    if(Math.floor(x/10) === 0){
        return true;
    }
    const originNum = x;
    let reversedNum = 0;
    while(x > 0){
        let lastNum = x%10;
        reversedNum = reversedNum *10 + lastNum;
        x = Math.floor(x/10);
    }
    return originNum === reversedNum;

};