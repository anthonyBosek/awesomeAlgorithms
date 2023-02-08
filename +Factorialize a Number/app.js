// Basic Algorithm Scripting: Factorialize a Number 
// 
// Return the factorial of the provided integer. If the integer is represented with
// the letter n, a factorial is the product of all positive integers less than or
// equal to n. Factorials are often represented with the shorthand notation "n!".
// Only integers greater than or equal to zero will be supplied to the function.
// 
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// 
// factorialize(num) ➞ num
// 

const factorialize = (num) => {
    if(num <= 1) return 1;
    return factorialize(num - 1) * num;
}

console.log(factorialize(5)) // ➞ 120
console.log(factorialize(10)) // ➞ 3628800
console.log(factorialize(20)) // ➞ 2432902008176640000
console.log(factorialize(0)) // ➞ 1