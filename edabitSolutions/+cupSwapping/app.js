// ** Cup Swapping **
// 
// There are three cups on a table, at positions A, B, and C. At the start, there is a ball hidden
// under the cup at position B. However, I perform several swaps on the cups, which is notated as
// two letters. For example, if I swap the cups at positions A and B, I could notate this as AB or
// BA . Create a function that returns the letter position that the ball is at, once I finish
// swapping the cups. The swaps will be given to you as an array.
// 
// Notes:
// • A swap could be notated in two different ways, since both ways end up with the same outcome.
// • All swaps will be notated as capital letters and will be valid.
// • You cannot swap a cup with itself.

// 
// cupSwapping(arr) ➞ str
// 
// ------------------------------------------------------------------------------------------------

const cupSwapping = (arr) => {
    let loc = 'B'
    arr.map(x => loc = x.includes(loc) ?
        x.split('').filter(z => z !== loc)[0] :
        loc)
    return loc
} //

console.log(cupSwapping(["AB", "CA"])) // ➞ "C"
console.log(cupSwapping(["AC", "CA", "CA", "AC"])) // ➞ "B"
console.log(cupSwapping(["BA", "AC", "CA", "BC"])) // ➞ "A"
console.log(cupSwapping(["BA", "AC", "CA", "BC", "AC", "CB"])) // ➞ "B"
console.log(cupSwapping(["BA", "AC", "CA", "BC", "AC", "CB", "CA", "AC", "CA", "CB"])) // ➞ "C"