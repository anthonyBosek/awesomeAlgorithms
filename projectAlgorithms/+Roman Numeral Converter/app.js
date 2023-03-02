// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// 
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
// 
// convertToRoman(num) ➞ str
// 

const convertToRoman = (num) => {
        let conversion = [
        {0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX"},
        {0: "", 1: "X", 2: "XX", 3: "XXX", 4: "XL", 5: "L", 6: "LX", 7: "LXX", 8: "LXXX", 9: "XC"},
        {0: "", 1: "C", 2: "CC", 3: "CCC", 4: "CD", 5: "D", 6: "DC", 7: "DCC", 8: "DCCC", 9: "CM"},
        {0: "", 1: "M", 2: "MM", 3: "MMM", 4: "M⊽", 5: "⊽", 6: "⊽M", 7: "⊽MM", 8: "⊽MMM", 9: "??"},
    ]
    // solution with map()
    return num.toString().split("").reverse().map((x, i) => conversion[i][x]).reverse().join("");

    // solution with for loop
    // let arr = num.toString().split("").reverse();
    // let roman = "";
    // for(let i = arr.length-1; i >= 0; i--) {
    //     roman += conversion[i][+arr[i]]
    // }
    // return roman;
}

console.log(convertToRoman(2)) // ➞ "II"
console.log(convertToRoman(3)) // ➞ "III"
console.log(convertToRoman(4)) // ➞ "IV"
console.log(convertToRoman(5)) // ➞ "V"
console.log(convertToRoman(9)) // ➞ "IX"
console.log(convertToRoman(12)) // ➞ "XII"
console.log(convertToRoman(16)) // ➞ "XVI"
console.log(convertToRoman(29)) // ➞ "XXIX"
console.log(convertToRoman(44)) // ➞ "XLIV"
console.log(convertToRoman(45)) // ➞ "XLV"
console.log(convertToRoman(68)) // ➞ "LXVIII"
console.log(convertToRoman(83)) // ➞ "LXXXIII"
console.log(convertToRoman(97)) // ➞ "XCVII"
console.log(convertToRoman(99)) // ➞ "XCIX"
console.log(convertToRoman(400)) // ➞ "CD"
console.log(convertToRoman(500)) // ➞ "D"
console.log(convertToRoman(501)) // ➞ "DI"
console.log(convertToRoman(649)) // ➞ "DCXLIX"
console.log(convertToRoman(798)) // ➞ "DCCXCVIII"
console.log(convertToRoman(891)) // ➞ "DCCCXCI"
console.log(convertToRoman(1000)) // ➞ "M"
console.log(convertToRoman(1004)) // ➞ "MIV"
console.log(convertToRoman(1006)) // ➞ "MVI"
console.log(convertToRoman(1023)) // ➞ "MXXIII"
console.log(convertToRoman(2014)) // ➞ "MMXIV"
console.log(convertToRoman(3999)) // ➞ "MMMCMXCIX"