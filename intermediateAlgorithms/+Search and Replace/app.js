// Intermediate Algorithm Scripting: Search and Replace
// 
// Perform a search and replace on the sentence using the arguments provided and
// return the new sentence. First argument is the sentence to perform the search
// and replace on. Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Notes:
//  • Preserve the case of the first character in the original word.
// 
// myReplace(str, before, after) ➞ str
// 

const myReplace = (str, before, after) => {
    return /^[A-Z]/.test(before) ?
        str.replace(before, after.replace(/^./, x => x.toUpperCase())) :
        // str.replace(before, after.replace(/^[a-z]/, x => x.toUpperCase())) :
        str.replace(before, after);
        // str.replace(before, after.replace(/^[A-Z]/, x => x.toLowerCase()));
}

console.log(myReplace("Let us go to the store", "store", "Mall")) // ➞ "Let us go to the mall"
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")) // ➞ "He is Sitting on the couch"
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")) // ➞ "This has a spelling error"
console.log(myReplace("His name is Tom", "Tom", "john")) // ➞ "His name is John"
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")) // ➞ "Let us get back to more Algorithms"