// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// 
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift
// cipher. In a shift cipher the meanings of the letters are shifted by some set amount. A common
// modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. Write a function which takes a ROT13 encoded string as
// input and returns a decoded string. All letters will be uppercase. Do not transform any
// non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
// 
// rot13(str) ➞ str
//
  
const rot13 = (str) => {
    let alphabet = "";
    for(let i = 65; i <= 90; i++) alphabet += String.fromCharCode(i);
    let ciphabet = alphabet.slice(13, alphabet.length) + alphabet.slice(0, 13)
    return str.split("").map(x => /\W/.test(x) ? x : ciphabet[alphabet.indexOf(x)]).join("");
}

console.log(rot13("LBH QVQ VG!")) // ➞ "YOU DID IT!"
console.log(rot13("SERR PBQR PNZC")) // ➞ "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")) // ➞ "FREE PIZZA!"
console.log(rot13("SERR YBIR?")) // ➞ "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")) // ➞ "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


