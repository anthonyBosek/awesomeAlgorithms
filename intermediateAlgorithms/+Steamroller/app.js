// Intermediate Algorithm Scripting: Steamroller
// 
// Flatten a nested array. You must account for varying levels of nesting.
// 
// steamrollArray(arr) ➞ arr
// 

const steamrollArray = (arr) => {
    return arr.flat(Infinity);
}



console.log(steamrollArray([[["a"]], [["b"]]])) // ➞ ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])) // ➞ [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])) // ➞ [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])) // ➞ [1, {}, 3, 4]