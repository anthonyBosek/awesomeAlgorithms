// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// 
// We'll pass you an array of high numbers. Return the sum of those high numbers plus the
// sum of all the numbers between them. The lowest number will not always come first.
// 
// sumAll(arr) ➞ num
// 

const sumAll = (arr) => {
    let [ low, high ] = arr.sort((a, b) => a - b);
    return low === high ? high : sumAll([low, high - 1]) + high;
}

console.log(sumAll([1, 4])) // ➞ 10
console.log(sumAll([4, 1])) // ➞ 10
console.log(sumAll([5, 10])) // ➞ 45
console.log(sumAll([10, 5])) // ➞ 45
console.log(sumAll([7, 1])) // ➞ 28