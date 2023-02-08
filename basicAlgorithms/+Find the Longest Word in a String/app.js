// Basic Algorithm Scripting: Find the Longest Word in a String 
// 
// Return the length of the longest word in the provided sentence.
// Your response should be a number.
// 
// findLongestWordLength(str) ➞ num
// 

const findLongestWordLength = (str) => {
    let arr = str.split(" ");
    return arr.sort((a, b) => b.length - a.length)[0].length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")) // ➞ 6
console.log(findLongestWordLength("May the force be with you")) // ➞ 5
console.log(findLongestWordLength("Google do a barrel roll")) // ➞ 6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")) // ➞ 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")) // ➞ 19