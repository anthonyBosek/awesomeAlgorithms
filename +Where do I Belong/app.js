// Basic Algorithm Scripting: Where do I Belong 
// 
// Return the lowest index at which a value (second argument) should be inserted
// into an array (first argument) once it has been sorted. The returned value should
// be a number.
// 
// getIndexToIns(arr, num) ➞ num
// 

const getIndexToIns = (arr, num) => {
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++) if(arr[i] >= num) return i;
    return arr.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) // ➞ 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) // ➞ 2
console.log(getIndexToIns([40, 60], 50)) // ➞ 1
console.log(getIndexToIns([3, 10, 5], 3)) // ➞ 0
console.log(getIndexToIns([5, 3, 20, 3], 5)) // ➞ 2
console.log(getIndexToIns([2, 20, 10], 19)) // ➞ 2
console.log(getIndexToIns([2, 5, 10], 15)) // ➞ 3
console.log(getIndexToIns([], 1)) // ➞ 0