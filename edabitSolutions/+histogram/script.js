// ** Histogram Function **
// 
// Build a function that creates histograms. Every bar needs to be on a new line and its length
// corresponds to the numbers in the array passed as an argument. The second argument of the
// function represents the character to be used for the bar.
// 
// histogram(arr, char) → str
// 
// ------------------------------------------------------------------------------------------------

// *** two for loop solution ***
// const histogram = (arr, char) => {
//     let str = "";
//     let resultArr = [];
//     for(let i = 0; i < arr.length; i++){
//         // console.log(arr[i]);
//         for(let j = 0; j < arr[i]; j++){
//             str = str + char;
//         }
//         // console.log(str);
//         resultArr.push(str);
//         str = ""
//     }
//     console.log(resultArr.join("\n"));
// }

// *** map solution ***
const histogram = (arr, char) => arr.map(x => char.repeat(x)).join("\n");

console.log(histogram([1, 3, 4], "#"));
console.log(histogram([6, 2, 15, 3], "="));
console.log(histogram([1, 10], "+"));
console.log(histogram([7, 10, 1, 3, 6], "*"));