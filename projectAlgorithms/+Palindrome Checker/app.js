// JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// 
// Return true if the given string is a palindrome. Otherwise, return false. 
// 
// palindrome(str) ➞ bool
//
  
const palindrome = (str) => {
    let forward = str.toLowerCase().replace(/[\s\W_]/g, "");
    let backward = forward.split("").reverse().join("");
    return forward === backward ? true : false;
}

console.log(palindrome("eye")) // ➞ true
console.log(palindrome("_eye")) // ➞ true
console.log(palindrome("race car")) // ➞ true
console.log(palindrome("not a palindrome")) // ➞ false
console.log(palindrome("A man, a plan, a canal. Panama")) // ➞ true
console.log(palindrome("never odd or even")) // ➞ true
console.log(palindrome("nope")) // ➞ false
console.log(palindrome("almostomla")) // ➞ false
console.log(palindrome("My age is 0, 0 si ega ym.")) // ➞ true
console.log(palindrome("1 eye for of 1 eye.")) // ➞ false
console.log(palindrome("0_0 (: /-\ :) 0-0")) // ➞ true
console.log(palindrome("five|\_/|four")) // ➞ false