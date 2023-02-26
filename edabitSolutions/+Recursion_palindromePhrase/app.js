// ** Recursion: Palindrome Phrase **
// 
// A palindrome is a series of letters or numbers that reads equivocally backwards.
// Write a recursive function that determines whether a given string is a palindrome or not.
// 
// Notes:
//  • Symbols and special characters should be ignored.
//  • You are expected to solve this challenge via recursion.
// 
// isPalindrome(str) ➞ bool
// 
// ------------------------------------------------------------------------------------------------

const isPalindrome = (str) => {
    if(str === "") return true
    let cut = str.toLowerCase().match(/\w/g).join("")
    let newStr = cut.slice(1, cut.length - 1)
    return cut[0] === cut[cut.length - 1] ? isPalindrome(newStr) : false
} //

console.log(isPalindrome("momo")) // ➞ false
console.log(isPalindrome("omommomo")) // ➞ true
console.log(isPalindrome("Go hang a salami, I'm a lasagna hog!")) // ➞ true
console.log(isPalindrome("This phrase, surely, is not a palindrome!")) // ➞ false
console.log(isPalindrome("Eva, can I see bees in a cave?")) // ➞ true