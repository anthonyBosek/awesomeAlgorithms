// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
// 
// Given a positive integer num, return the sum of all odd Fibonacci numbers
// that are less than or equal to num.
// 
// sumFibs(num) ➞ num
// 

const sumFibs = (num) => {
    let fibSeq = [1, 1];
    let next = 0;
    for(let i = 0; next <= num; i++) {
        next = fibSeq[i] + fibSeq[i + 1];
        next <= num ? fibSeq.push(next) : null;
    }
    return fibSeq.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

console.log(sumFibs(1)) // ➞ a number
console.log(sumFibs(4)) // ➞ 5
console.log(sumFibs(100)) // ➞ 188
console.log(sumFibs(1000)) // ➞ 1785
console.log(sumFibs(75024)) // ➞ 60696
console.log(sumFibs(75025)) // ➞ 135721
console.log(sumFibs(4000000)) // ➞ 4613732