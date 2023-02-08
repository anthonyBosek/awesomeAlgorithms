// Basic Algorithm Scripting: Repeat a String Repeat a String 
// 
// Repeat a given string "str" (first argument) for "num" times (second argument). 
// Return an empty string if num is not a positive number.
// 
// repeatStringNumTimes(str,num) ➞ str
// 

const repeatStringNumTimes = (str, num) => {
    if(num <= 0) return "";
    let answer = "";
    for(let i = 1; i <= num; i++) answer += str;
    return answer;

        // ** solution w/ repeat() method **
        // ----------
        // if(num <= 0) return "";
        // return str.repeat(num);
        // ----------
}

console.log(repeatStringNumTimes("*", 3)) // ➞ "***".
console.log(repeatStringNumTimes("abc", 3)) // ➞ "abcabcabc".
console.log(repeatStringNumTimes("abc", 4)) // ➞ "abcabcabcabc".
console.log(repeatStringNumTimes("abc", 1)) // ➞ "abc".
console.log(repeatStringNumTimes("*", 8)) // ➞ "********".
console.log(repeatStringNumTimes("abc", -2)) // ➞ "".
console.log(repeatStringNumTimes("abc", 0)) // ➞ "".