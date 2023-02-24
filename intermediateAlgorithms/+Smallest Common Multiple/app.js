// Intermediate Algorithm Scripting: Smallest Common Multiple
// 
// Find the smallest common multiple of the provided parameters that can be evenly
// divided by both, as well as by all sequential numbers in the range between these
// parameters. The range will be an array of two numbers that will not necessarily
// be in numerical order.
// 
// smallestCommons(arr) ➞ num
// 

const smallestCommons = (arr) => {
    let [start, stop] = arr.sort((a, b) => a - b);
    let num = stop;
    for(let i = start; i <= stop; i++){
        num % i !== 0 ? (num += stop, i = start - 1) : null;
    }
    return num;
}

console.log(smallestCommons([1, 5])) // ➞ 60
console.log(smallestCommons([5, 1])) // ➞ 60
console.log(smallestCommons([2, 10])) // ➞ 2520
console.log(smallestCommons([1, 13])) // ➞ 360360
console.log(smallestCommons([23, 18])) // ➞ 6056820