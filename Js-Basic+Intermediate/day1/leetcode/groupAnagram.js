/**
 * LC-49: Group Anagrams
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]

   Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 */

   var groupAnagrams = function(strs) {
    let result = [];
    let key="";
    let map = new Map();
    
    for(let word of strs){
        let key = word.split("").sort().join("");
        if(!map.has(key)) map.set(key,[]);
        map.get(key).push(word)
    }
    return Array.from(map.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))