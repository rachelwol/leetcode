/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let curr = 0;
    const rows = Array(numRows).fill(null).map(() => "");
    let next = numRows == 1 ? 0:-1;
    for(const c of s){
        console.log('rows[curr]',rows[curr]);
        console.log('curr',curr);
        rows[curr]+=c;
        if(curr === 0 || curr === numRows -1)
            next *= -1;
        curr += next;
    }
    return rows.join("");
};