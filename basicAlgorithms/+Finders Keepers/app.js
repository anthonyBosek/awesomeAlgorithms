// Basic Algorithm Scripting: Finders Keepers 
// 
// Create a function that looks through an array (first argument) and returns the first
// element in the array that passes a truth test (second argument). If no element passes
// the test, return undefined.
// 
// findElement(arr, func) ➞ val
// 

const findElement = (arr, func) => {
    // ** for loop
    // for(let i = 0; i < arr.length; i++) if(func(arr[i])) return arr[i];

    // ** arr.filter()
    return arr.filter(item => func(item))[0];
    // return arr.filter(item => func(item) ? item : undefined)[0];
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })) // ➞ 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })) // ➞ undefined