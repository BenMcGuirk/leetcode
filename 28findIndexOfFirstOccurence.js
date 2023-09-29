//Given two strings of needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

//my attempt
var findIndexOfFirstOccurence = function(haystack, needle) {
    let i = 0;
    let j = needle.length;
    while(j < haystack.length) {
        if(haystack.substring(i, j) === needle) {
            return i;
        } else {
            i++;
            j++;
        }
    }
    return -1;
};

console.log(findIndexOfFirstOccurence('sadbutsad', 'sad'));
console.log(findIndexOfFirstOccurence('leetcode', 'leeto'));


//solution copilot
var findIndexOfFirstOccurence = function(haystack, needle) {
    if (needle.length === 0) return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (haystack.substring(i, i + needle.length) === needle) {
                return i;
            }
        }
    }
    return -1;
}
