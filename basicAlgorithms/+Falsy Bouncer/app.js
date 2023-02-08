// Basic Algorithm Scripting: Falsy Bouncer 
// 
// Remove all falsy values from an array. Falsy values in JavaScript are false,
// null, 0, "", undefined, and NaN.
// 
// bouncer(arr) ➞ newArr
// 

const bouncer = (arr) => { return arr.filter(x => Boolean(x)) }

// const bouncer = (arr) => {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(Boolean(arr[i]) === true) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

console.log(bouncer([7, "ate", "", false, 9])) // ➞ [7, "ate", 9]
console.log(bouncer(["a", "b", "c"])) // ➞ ["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ""])) // ➞ []
console.log(bouncer([1, null, NaN, 2, undefined])) // ➞ [1, 2]