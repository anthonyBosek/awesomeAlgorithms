// Intermediate Algorithm Scripting: Missing letters
// 
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined. 
// 
// fearNotLetter(str) ➞ str
// 

let alphabet = "";
for(let i = 97; i <= 122; i++) alphabet += String.fromCharCode(i);
// uses fromCharCode() to create a string of all letters

const fearNotLetter = (str) => {
    let start = alphabet.indexOf(str[0]);
    let end = start + str.length;
    let cut = alphabet.slice(start, end);
    return str != cut ?
        cut.split("").filter((x, i) => str.split("").indexOf(x) !== i)[0] :
        undefined;
}

console.log(fearNotLetter("abce")) // ➞ "d"
console.log(fearNotLetter("abcdefghjklmno")) // ➞ "i"
console.log(fearNotLetter("stvwx")) // ➞ "u"
console.log(fearNotLetter("bcdf")) // ➞ "e"
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) // ➞ undefined


// A-Z 65-90, a-z 97-122
// let alphabetUpperCase = "";
// for(let i = 65; i <= 90; i++) alphabetUpperCase += String.fromCharCode(i);