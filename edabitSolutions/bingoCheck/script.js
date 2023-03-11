// ** Bingo Check **
// 
// Create a function that takes a 5x5 3D array and returns true if it has at least one Bingo,
// and false if it doesn't.
// 
// Notes:
//  • Only check for diagnols, horizontals and verticals.
// 
// bingoCheck(arr) → bool
// 
// ------------------------------------------------------------------------------------------------

const bingoCheck = (arr) => {
    let diagFor = [ 0, 1, 2, 3, 4 ]
    let diagRev = [ 4, 3, 2, 1, 0 ]
    let marked = []
    arr.map((subArr) => {
        subArr.map((index) => index === "x" ? marked.push(subArr.indexOf(index)) : null)
    }) //
    if(marked.length !== 5) return false
    if(marked.filter((x, i, arr) => arr.indexOf(x) == i).length === 1) return true
    if(marked.map((x, i) => x === diagFor[i] ? true : false).reduce((a, b) => a && b)) return true
    if(marked.map((x, i) => x === diagRev[i] ? true : false).reduce((a, b) => a && b)) return true
    return marked
} //


console.log(bingoCheck([
    [45, "x", 31, 74, 87],
    [64, "x", 47, 32, 90],
    [37, "x", 68, 83, 54],
    [67, "x", 98, 39, 44],
    [21, "x", 24, 30, 52]
    ])) // ➞ true
console.log(bingoCheck([
    ["x", 43, 31, 74, 87],
    [64, "x", 47, 32, 90],
    [37, 65, "x", 83, 54],
    [67, 98, 39, "x", 44],
    [21, 59, 24, 30, "x"]
    ])) // ➞ true
console.log(bingoCheck([
    [87, 43, 31, 74, "x"],
    [64, 39, 47, "x", 90],
    [37, 65, "x", 83, 54],
    [67, "x", 39, 77, 44],
    ["x", 59, 24, 30, 89]
    ])) // ➞ true
console.log(bingoCheck([
    ["x", "x", "x", "x", "x"],
    [64, 12, 47, 32, 90],
    [37, 16, 68, 83, 54],
    [67, 19, 98, 39, 44],
    [21, 75, 24, 30, 52]
    ])) // ➞ true
console.log(bingoCheck([
    [45, "x", 31, 74, 87],
    [64, 78, 47, "x", 90],
    [37, "x", 68, 83, 54],
    [67, "x", 98, 77, 44],
    [21, "x", 24, 30, 52]
    ])) // ➞ false
console.log(bingoCheck([
    [45, "x", 31, 74, 87],
    [64, 78, 47, "x", 90],
    [37, "x", 68, 83, 54],
    [67, "x", 98, "x", 44],
    [21, "x", 24, 30, 52]
    ])) // ➞ false
console.log(bingoCheck([
    [45, "x", 31, 74, 87],
    [64, 78, 47, "x", 90],
    [37, 16, 68, 83, 54],
    [67, "x", 98, "x", 44],
    [21, 32, 24, 30, 52]
    ])) // ➞ false