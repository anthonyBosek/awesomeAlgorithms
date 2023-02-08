// Basic Algorithm Scripting: Reverse a String 
// 
// Reverse the provided string. You may need to turn the string into an array
// before you can reverse it. Your result must be a string.
// 
// reverseString(str) ➞ str
// 

const reverseString = (str) => { return str.split("").reverse().join(""); }

console.log(reverseString("hello")) // ➞ "olleh"
console.log(reverseString("Howdy")) // ➞ "ydwoH"
console.log(reverseString("Greetings from Earth")) // ➞ "htraE morf sgniteerG"