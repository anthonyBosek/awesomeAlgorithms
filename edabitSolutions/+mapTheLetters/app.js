// ** Map the Letters in a String **
// 
// Given a word, create an object that stores the indexes of each letter in an array.
//  • Make sure the letters are the keys.
//  • Make sure the letters are symbols.
//  • Make sure the indexes are stored in an array and those arrays are values.
// 
// ** All strings given will be lowercase.
// 
// mapLetters(str) ➞ obj
// 
// ------------------------------------------------------------------------------------------------

const mapLetters = (str) => {
    let obj = {}
    str.split('').map((x, i) => obj[x] ? obj[x].push(i) : obj[x] = [i])
    return obj
} //

console.log(mapLetters('dodo')) // ➞ { d: [0, 2], o: [1, 3] }
console.log(mapLetters('froggy')) // ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
console.log(mapLetters('grapes')) // ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
console.log(mapLetters('anthony bosek')) // ➞ { a: [0], n: [1, 5], t: [2], h: [3], o: [4, 9], y: [6], " ": [7], b: [8], s: [10], e: [11], k: [12] }