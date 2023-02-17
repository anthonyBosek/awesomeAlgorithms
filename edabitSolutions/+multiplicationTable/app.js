// ** Multiplication Table **
// 
// Create a function that takes an integer n and returns multiplication table of 1 to n numbers up
// to n th multiple.
// 
// multTable(num) ➞ arr
// 
// ------------------------------------------------------------------------------------------------

const multTable = (num) => {
    let arr = []
    for (let i = 1; i <= num; i++) {
        let subArr = []
        for (let j = 1; j <= num; j++) {
            subArr.push(i * j)
        } //
        arr.push(subArr)
        subArr = []
    } //
    return arr
} //

console.log(multTable(2))
// ➞[
//     [1, 2],
//     [2, 4]
// ]
console.log(multTable(3))
// ➞[
//     [1, 2, 3],
//     [2, 4, 6],
//     [3, 6, 9]
// ]
console.log(multTable(5))
// ➞[
//     [1, 2, 3, 4, 5],
//     [2, 4, 6, 8, 10],
//     [3, 6, 9, 12, 15],
//     [4, 8, 12, 16, 20],
//     [5, 10, 15, 20, 25]
// ]
