// ** Hitting the Jackpot **
// 
// Create a function that takes in an array (slot machine outcome) and returns
// true if all elements in the array are identical, and false otherwise.
// The array will contain 4 elements.
// 
// Notes
//  •The elements must be exactly identical for there to be a jackpot.
// 
// testJackpot(arr) ➞ bool
// 
// ------------------------------------------------------------------------------------------------

const testJackpot = (arr) => {
    let jackPot = arr.filter((sym, i, arr) => arr.indexOf(sym) === i)
    return jackPot.length === 1
} //

console.log(testJackpot(["@", "@", "@", "@"])) // ➞ true
console.log(testJackpot(["abc", "abc", "abc", "abc"])) // ➞ true
console.log(testJackpot(["SS", "SS", "SS", "SS"])) // ➞ true
console.log(testJackpot(["&&", "&", "&&&", "&&&&"])) // ➞ false
console.log(testJackpot(["SS", "SS", "SS", "Ss"])) // ➞ false