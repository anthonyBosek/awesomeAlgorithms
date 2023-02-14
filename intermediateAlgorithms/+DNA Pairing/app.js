// Intermediate Algorithm Scripting: DNA Pairing
// 
// The DNA strand is missing the pairing element. Take each character, get its pair,
// and return the results as a 2nd array. Base pairs are a pair of AT and CG. Match
// the missing element to the provided character. Return the provided character as the
// first element in each array. For example, for the input GCG, return
// [["G", "C"], ["C","G"],["G", "C"]] The character and its pair are paired up in an array,
// and all the arrays are grouped into one encapsulating array.
// 
// pairElement(str) ➞ arr
// 

let helix = [ ["A","T"], ["T","A"], ["C","G"], ["G","C"] ];

const pairElement = (str) => {
    return str.split("").map(item => helix.filter(x => item == x[0])[0]);
}

console.log(pairElement("ATCGA")) // ➞ [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG")) // ➞ [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA")) // ➞ [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]