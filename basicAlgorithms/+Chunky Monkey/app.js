// Basic Algorithm Scripting: Chunky Monkey 
// 
// Write a function that splits an array (first argument) into groups the length
// of size (second argument) and returns them as a two-dimensional array.
// 
// chunkArrayInGroups(arr, size) ➞ arr
// 

const chunkArrayInGroups = (arr, size) => {
    let resultArr = [];
    for(let i = 0; arr.length > 0; i++){
        if(arr.length >= size) resultArr.push(arr.splice(0, size));
        else resultArr.push(arr.splice(0));
    }
    return resultArr;

    // let finalArr = [];
    // for(let i = 0; i < arr.length / size; i++) {
    //     let newArr = arr.slice((size * i), (size * (i + 1)));
    //     finalArr.push(newArr);
    // }
    // return finalArr;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)) // ➞ [["a", "b"], ["c", "d"]]
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)) // ➞ [[0, 1, 2], [3, 4, 5]]
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)) // ➞ [[0, 1], [2, 3], [4, 5]]
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)) // ➞ [[0, 1, 2, 3], [4, 5]]
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)) // ➞ [[0, 1, 2], [3, 4, 5], [6]]
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)) // ➞ [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)) // ➞ [[0, 1], [2, 3], [4, 5], [6, 7], [8]]