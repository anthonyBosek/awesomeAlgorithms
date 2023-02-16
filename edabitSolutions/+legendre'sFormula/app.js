// ** Legendre's Formula **
// 
// Legendre's formula finds the exponent of the largest power of some prime p that divides (is a factor of)
// the factorial of somenumber n .
// The formula returns the sum of many fractions (rounded down) with n as the numerator and a steadily
// increasing power of p as the denominator, stopping when it exceeds the numerator.
//      To illustrate:
//          p = 5
//          n = 100
//          int(100/5) + int(100/25) ➞ No 100/125 because 125 > 100.
// 
//          p = 2
//          n = 128
//          int(128/2) + int(128/4) + int(128/8) + ... + int(128/128)
// 
// Given p and n , return the result of Legendre's formula.
// 
// Notes:
//  •p and n will be positive integers.
//  •When p exceeds n , the result should be 0 .
// 
// legendre(num, num) ➞ num
// 
// ------------------------------------------------------------------------------------------------

const legendre = (p, n) => {
    if(p > n) return 0
    let y = 0
    for(let i = 1; i < n / 2; i++){
        y += Math.floor(n / p**i)
        if(y > n || p**i > n) break
    } //
    return y
} //

console.log(legendre(5, 100)) // ➞ 24
console.log(legendre(2, 128)) // ➞ 127
console.log(legendre(3, 50)) // ➞ 22
console.log(legendre(2, 27)) // ➞ 23
console.log(legendre(10, 2)) // ➞ 0