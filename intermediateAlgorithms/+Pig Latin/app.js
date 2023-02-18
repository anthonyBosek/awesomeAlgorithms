// Intermediate Algorithm Scripting: Pig Latin
// 
// Translate the provided string to pig latin. Pig Latin takes the first consonant
// (or consonant cluster) of an English word, moves it to the end of the word and
// suffixes an "ay". If a word begins with a vowel you just add "way" to the end.
// If a word does not contain a vowel, just add "ay" to the end. Input strings are
// guaranteed to be English words in all lowercase.
// 
// translatePigLatin(str) ➞ str
// 

const translatePigLatin = (str) => {
    let [ cut, ...arr ] = str.split(/(?=[aeiou])/);
    return /^[aeiou]/.test(str) ? str + "way" : arr.join("") + cut + "ay";
}

console.log(translatePigLatin("california")) // ➞ return "aliforniacay"
console.log(translatePigLatin("paragraphs")) // ➞ return "aragraphspay"
console.log(translatePigLatin("glove")) // ➞ return "oveglay"
console.log(translatePigLatin("algorithm")) // ➞ return "algorithmway"
console.log(translatePigLatin("eight")) // ➞ return "eightway"
console.log(translatePigLatin("schwartz")) // ➞ return "artzschway"
console.log(translatePigLatin("rhythm")) // ➞ return "rhythmay"