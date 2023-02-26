// ** Rotate-Transform the Two-Dimensional Matrix **
// 
// description
// 
// rotateTransform() ➞ *
// 
// ------------------------------------------------------------------------------------------------

const rotateTransform = (arr, num) => {
    let v = arr.length // sets length of array as value
    let result = []
    let flat = arr // flattens arr to one simple array
        .flat(1)
        .slice(-num)
        .concat(arr
            .flat(1)
            .slice(0, -num)
        )
    // for loop to create sub arrays and push into result
    // reverse sub array based off cycle odd/even
    for (let i = 0, c = 0; i <= v; i += 2) {
        result.push(
            c % 2 === 0
                ? flat.splice(0, v)
                : flat.splice(0, v).reverse()
        )
        c++
    }

    return result

} //

console.log(rotateTransform([
    [2, 4],
    [0, 0]
], 1))
// ➞ [
// [0, 2],
// [0, 4]
// ]
console.log(rotateTransform([
    [2, 4],
    [0, 0]
], 2))
// ➞ [
// [0, 0],
// [4, 2]
// ]
console.log(rotateTransform([
    [2, 4],
    [0, 0]
], -1))
// ➞ [
// [4, 0],
// [2, 0]
// ]
console.log(rotateTransform([
    [2, 4],
    [0, 0]
], -3))
// ➞ [
// [0, 2],
// [0, 4]
// ]