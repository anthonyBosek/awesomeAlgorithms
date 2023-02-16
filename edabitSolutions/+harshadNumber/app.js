// ** Harshad Number **
// 
// A number is said to be Harshad if it's exactly divisible by the sum of its digits.
// Create a function that determines whether a number is a Harshad or not.
// 
// isHarshad(num) ➞ bool
// 
// ------------------------------------------------------------------------------------------------

const isHarshad = (num) => {
    let divisor = num.toString().split('').reduce((a, b) => +a + +b)
    return num % divisor === 0
} //

console.log(isHarshad(75)) // ➞ false
console.log(isHarshad(171)) // ➞ true
console.log(isHarshad(481)) // ➞ true
console.log(isHarshad(89)) // ➞ false
console.log(isHarshad(516)) // ➞ true
console.log(isHarshad(200)) // ➞ true