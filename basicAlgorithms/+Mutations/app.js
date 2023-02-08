// Basic Algorithm Scripting: Mutations 
// 
// Return true if the string in the first element of the array contains all of
// the letters of the string in the second element of the array.
// 
// mutation(arr) ➞ bool
// 

const mutation = (arr) => {
    let [ fir, sec ] = arr;
    return sec
        .toLowerCase()
        .split("")
        .filter(x => fir.toLowerCase().indexOf(x) < 0)
        .length > 0 ? false : true;
}

console.log(mutation(["hello", "hey"])) // ➞ false
console.log(mutation(["hello", "Hello"])) // ➞ true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) // ➞ true
console.log(mutation(["Mary", "Army"])) // ➞ true
console.log(mutation(["Mary", "Aarmy"])) // ➞ true
console.log(mutation(["Alien", "line"])) // ➞ true
console.log(mutation(["floor", "for"])) // ➞ true
console.log(mutation(["hello", "neo"])) // ➞ false
console.log(mutation(["voodoo", "no"])) // ➞ false