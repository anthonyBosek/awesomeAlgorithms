// Intermediate Algorithm Scripting: Sum All Primes
// 
// Sum all the prime numbers up to and including the provided number. A prime number is
// defined as a number greater than one and having only two divisors, one and itself.
// 
// sumPrimes(num) ➞ num
// 

const sumPrimes = (num) => {
    if(num <= 1) return "Invalid Argument"
    let sum = 2;
    let val = 3;
    for(let i = 2; val <= num; i++) {
        val % i == 0 ? (val++, i = 1) :
        i == Math.ceil(val / 2) ? (sum += val, val++, i = 1) :
        null;
    }
    return sum;
}

console.log(sumPrimes(1)) // ➞ Invalid Argument
console.log(sumPrimes(2)) // ➞ 2
console.log(sumPrimes(10)) // ➞ 17
console.log(sumPrimes(100)) // ➞ 1060
console.log(sumPrimes(977)) // ➞ 73156
