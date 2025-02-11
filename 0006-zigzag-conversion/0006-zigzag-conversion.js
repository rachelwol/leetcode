/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1 || numRows >= s.length)
        return s;
    let curr = 0;
    let rows = Array(numRows).fill('');
    let next = 1;
    for (let c of s) {
        rows[curr] += c;
        if (curr === 0)
            next = 1;
        else
            if (curr === numRows - 1)
                next = -1;
        curr += next;
    }
    return rows.join("");
};