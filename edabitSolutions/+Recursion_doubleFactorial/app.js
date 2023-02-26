// ** Recursion: Double Factorial **
// 
// Create a function that takes a number num and returns its double factorial.
// 
// Notes:
// • Assume all input values are greater than or equal to -1 .
// • Try to solve it with recursion.
// • Double factorial is not the same as factorial * 2.
// 
// doubleFactorial(num) ➞ num
// 
// ------------------------------------------------------------------------------------------------

const doubleFactorial = (num) => {

    // solution with recursion
    return num <= 1 ? 1 : doubleFactorial(num - 2) * num


    // solution with for loop
    // let total = 1
    // for(let i = num; i > 0; i = i - 2) {
    //     total *= i
    // }
    // return total

} //

console.log(doubleFactorial(0)) // ➞ 1
console.log(doubleFactorial(2)) // ➞ 2
console.log(doubleFactorial(9)) // ➞ 945
// 9*7*5*3*1 = 945
console.log(doubleFactorial(19)) // ➞ 654729075‬
console.log(doubleFactorial(14)) // ➞ 645120