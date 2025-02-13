/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    let searchAll = [];
    let searchTxt = "";
    products.sort();
    for(let s of searchWord){
        searchTxt += s;
        let searchRes = [];
        for(let p of products){
            if(p.startsWith(searchTxt)){
                searchRes.push(p);
            }
            if(searchRes.length == 3){
                break;
            }
        }
        searchAll.push(searchRes);
    }
    return searchAll;
};