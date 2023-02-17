// ** Moving Partition **
// 
// Create a function to partition an array from left to right.
// 
// Notes:
//  • With an n input, your output should be an array containing n-1 subarrays. Each subarray should have two elements:
//    the left and the right side of the partition (both should be non-empty, unless the input array is empty).
//  • An empty array should return an empty array: []

// 
// movingPartition(arr) ➞ arr
// 
// ------------------------------------------------------------------------------------------------

const movingPartition = (arr) => {

    // solution with for loop
    // let newArr = []
    // for(let i = 1; i < arr.length; i++){
    //     newArr.push([arr.slice(0, i), arr.slice(i)])
    // } //
    // return newArr

    // solution with map & filter
    return arr.map((x, i, a) => i > 0 ? [a.slice(0, i), a.slice(i)] : null).filter(x => x) // null === falsey

} //

console.log(movingPartition([-1, -1, -1, -1])) // ➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]
console.log(movingPartition([1, 2, 3, 4, 5])) // ➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]
console.log(movingPartition([])) // ➞ []