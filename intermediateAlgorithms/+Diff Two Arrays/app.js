// Intermediate Algorithm Scripting: Diff Two Arrays
// 
// Compare two arrays and return a new array with any items only found in one of
// the two given arrays, but not both. In other words, return the symmetric
// difference of the two arrays.
// 
// diffArray(arr1, arr2) ➞ arr
// 

const diffArray = (arr1, arr2) => {
    let justOne = [];
    arr1.map(x => arr2.indexOf(x) < 0 ? justOne.push(x) : null);
    arr2.map(x => arr1.indexOf(x) < 0 ? justOne.push(x) : null);
    return justOne;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) // ➞  an array
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) // ➞  ["pink wool"]
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) // ➞  ["diorite", "pink wool"]
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])) // ➞  []
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) // ➞  [4]
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])) // ➞  ["piglet", 4]
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])) // ➞  ["snuffleupagus", "cookie monster", "elmo"]
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])) // ➞  [1, "calf", 3, "piglet", 7, "filly"]