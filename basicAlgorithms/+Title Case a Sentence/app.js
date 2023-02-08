// Basic Algorithm Scripting: Title Case a Sentence 
// 
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case. For the purpose of this exercise,
// you should also capitalize connecting words like "the" and "of".
// 
// titleCase(str) ➞ str
// 

// const titleCase = (str) => {
//     let arr = str.toLowerCase().split(" ");
//     for(let i = 0; i < arr.length; i++) {
//         let word = arr[i].split("");
//         word.splice(0, 1, word[0].toUpperCase());
//         arr[i] = word.join("");
//     }
//     return arr.join(" ");
// }

// ** crazy good solution !!
const titleCase = (str) => str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());

console.log(titleCase("I'm a little tea pot")) // ➞ "I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt")) // ➞ "Short And Stout"
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")) // ➞ "Here Is My Handle Here Is My Spout"