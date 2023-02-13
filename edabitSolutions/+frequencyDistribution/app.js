// ** Frequency Distribution **
// 
// Create a function that returns the frequency distribution of an array. This function should return
// an object. Where the keys are the unique elements and the values are the frequency in which those
// elements occur.
// 
// Notes:
//  • If given an empty array, return an empty object.
//  • The object should be in the same order as in the input array.
// 
// getFrequencies(arr) ➞ obj
// 
// ------------------------------------------------------------------------------------------------

const getFrequencies = (arr) => {
    let obj = {}
    arr.map(x => obj[x] ? obj[x] ++ : obj[x] = 1)
    return obj
} //

console.log(getFrequencies(['A', 'B', 'A', 'A', 'A'])) // ➞ { A: 4, B: 1 }
console.log(getFrequencies([1, 2, 3, 3, 2])) // ➞ { "1": 1, "2": 2, "3": 2 }
console.log(getFrequencies([true, false, true, false, false])) // ➞ { true: 2, false: 3}
console.log(getFrequencies([])) // ➞ {}