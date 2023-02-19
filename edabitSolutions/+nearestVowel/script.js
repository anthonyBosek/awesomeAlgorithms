// ** Nearest Vowel **
// 
// Given a letter, create a function which returns the nearest vowel to the letter. If two vowels
// are equidistant to the given letter, return the earlier vowel.
// 
// Notes:
//  • All letters will be given in lowercase.
//  • There will be no alphabet wrapping, the closest vowel to "z" should return "u", not "a".
// 
// nearestVowel(str) ➞ str
// 
// ------------------------------------------------------------------------------------------------

let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let vowels = [["a", 0], ["e", 4], ["i", 8], ["o", 14], ["u", 20]];
let arr = alphabet.split("");
let vowels = [];
let myRegEx = /a|e|i|o|u/;
let mapCheck = arr.map((letter, i) => myRegEx.test(letter) ? vowels.push([letter, i]) : null);


const nearestVowel = (str) => {
    let position = alphabet.indexOf(str);
    let absoluteValue = vowels.map(x => Math.abs(position - x[1]));
    let index = absoluteValue.indexOf(Math.min(...absoluteValue));
    return vowels[index][0];
};

console.log(nearestVowel("b")) // ➞ "a"
console.log(nearestVowel("s")) // ➞ "u"
console.log(nearestVowel("c")) // ➞ "a"
console.log(nearestVowel("i")) // ➞ "i"
console.log(nearestVowel("r")) // ➞ "o"
console.log(nearestVowel("z")) // ➞ "u"