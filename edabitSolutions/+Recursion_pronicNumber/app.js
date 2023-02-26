// ** Recursion: Pronic Number **
// 
// A pronic number (or otherwise called as heteromecic) is a number which is a product of two
// consecutive integers, that is, a number of the form n(n + 1) . Create a function that determines
// whether a number is pronic or not.
// 
// Notes:
//  • You are expected to solve this challenge via recursion.
// 
// isHeteromecic(num) ➞ bool
// 
// ------------------------------------------------------------------------------------------------

const isHeteromecic = (num, n) => {
    let sqrt = Math.ceil(Math.sqrt(num))
    if(n === undefined) n = 0
    let product = n * (n + 1)
    return product === num ? true :
        n < sqrt ? isHeteromecic(num, n + 1) :
        false
} //

console.log(isHeteromecic(0)) // ➞ true // 0 * (0 + 1) = 0 * 1 = 0
console.log(isHeteromecic(2)) // ➞ true // 1 * (1 + 1) = 1 * 2 = 2
console.log(isHeteromecic(7)) // ➞ false
console.log(isHeteromecic(110)) // ➞ true // 10 * (10 + 1) = 10 * 11 = 110
console.log(isHeteromecic(136)) // ➞ false
console.log(isHeteromecic(156)) // ➞ true