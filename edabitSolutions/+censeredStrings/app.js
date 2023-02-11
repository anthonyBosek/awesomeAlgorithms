// ** C*ns*r*d Str*ngs **
// 
// Someone has attempted to censor my strings by replacing every vowel with a * , l*k* th*s . Luckily,
// I've been able to find the vowels that were removed.
// Given a censored string and a string of the censored vowels, return the original uncensored string.
// 
// Notes:
//  • The vowels are given in the correct order.
//  • The number of vowels will match the number of * characters in the censored string.
// 
// uncensor(str1, str2) ➞ str
// 
// ------------------------------------------------------------------------------------------------

const uncensor = (str, vwl) => {
    let i = -1
    return str.replace(/\*/g, () => (i++, vwl[i]))
} //

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo")) // ➞ "Where did my vowels go?"
console.log(uncensor("abcd", "")) // ➞ "abcd"
console.log(uncensor("*PP*RC*S*", "UEAE")) // ➞ "UPPERCASE"
console.log(uncensor("Wh*t th* f*ck?!?", "aeu")) // ➞ "What the fuck?!?"
