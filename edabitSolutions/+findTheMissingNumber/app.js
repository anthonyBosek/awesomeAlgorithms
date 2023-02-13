// ** Find the Missing Number **
// 
// Create a function that takes an array of numbers between 1 and 10
// (excluding one number) and returns the missing number.
// 
// Notes:
//  • The array of numbers will be unsorted (not in order).
//  • Only one number will be missing.
// 
// missingNum(arr) ➞ num
// 
// ------------------------------------------------------------------------------------------------

const missingNum = (arr) => {
    arr.sort((a, b) => a - b)

    // solution with var & filter
    // let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // return values.filter((x, i) => x !== arr[i])[0]

    // solution with for loop
    for(let i = 0; i < 10; i++) {
        if(arr[i] === i + 1) {
            continue
        } else {
            return i + 1
        }
    } //
    return "All Numbers Present"
    
} //

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])) // ➞ 5
console.log(missingNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // ➞ true
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])) // ➞ 10
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])) // ➞ 7