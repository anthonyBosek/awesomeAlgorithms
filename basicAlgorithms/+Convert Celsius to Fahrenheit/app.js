// Basic Algorithm Scripting: Convert Celsius to Fahrenheit
// 
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius
// times 9/5, plus 32. You are given a variable celsius representing a temperature in
// Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit
// temperature equivalent to the given Celsius temperature. Use the algorithm mentioned
// above to help convert the Celsius temperature to Fahrenheit.
// 
// convertToF(num) ➞ num
// 

const convertToF = (celsius) => {
    let fahrenheit = celsius * 9/5 +32;
    return fahrenheit;
}

console.log(convertToF(0)) // return ➞ number
console.log(convertToF(-30)) // return ➞ -22
console.log(convertToF(-10)) // return ➞ 14
console.log(convertToF(0)) // return ➞ 32
console.log(convertToF(20)) // return ➞ 68
console.log(convertToF(30)) // return ➞ 86