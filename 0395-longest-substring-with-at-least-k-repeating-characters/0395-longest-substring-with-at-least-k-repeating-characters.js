/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function longestSubstring(s, k) {
    if (s.length < k) {
        return 0;
    }

    const solve = (str) => {
        if (str.length === 0) return 0;

        const counts = {};
        for (const char of str) {
            counts[char] = (counts[char] || 0) + 1;
        }

        let splitChar = null;
        for (const char in counts) {
            if (counts[char] < k) {
                splitChar = char;
                break; // Important: Exit loop once splitChar is found
            }
        }

        if (splitChar === null) {
            return str.length; // Base case: all characters meet the criteria
        }

        let maxLen = 0;
        const substrings = str.split(splitChar);

        for (const sub of substrings) {
            maxLen = Math.max(maxLen, solve(sub));
        }
        return maxLen;
    };

    return solve(s);
};