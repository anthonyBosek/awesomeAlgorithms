// ** Modified Kaprekar Numbers **
// 
// A modified Kaprekar number is a positive whole number with a special property. If you square it,
// then split the number into two integers and sum those integers, you have the same value you
// started with.
// 
// Consider a positive whole number "n" with "d" digits. We square "n" to arrive at a number that is either
// (2 * d) digits long or (2 * d)- 1 digits long. Split the string representation of the square into
// two parts, "l" and "r" . The right-hand part, "r" must be "d" digits long. The left is the remaining substring.
// Convert those two substrings back to integers, add them and see if you get "n".
// 
// For example, if n=5 , d=1 , then n squared = 25 . We split that into two strings and convert them back
// to integers 2 and 5 . We test 2+5=7=5 , so this is not a modified Kaprekar number.
// If n=9 , d=1 , and n squared = 81 . This gives us 1+8=9 , the original "n".
// 
// * Note that r may have leading zeros.
// 
// Complete the kaprekarNumbers() method. It should return the list of modified Kaprekar numbers in ascending order.
//         kaprekarNumbers() has the following parameter(s):
//             p : an integer representing the lower integer limit.
//             q : an integer representing the upper integer limit.
// Notes:
//  • Upper and lower ranges should be inclusive of the limits.
//  • If no modified Kaprekar numbers exist in the given range, return "INVALID RANGE".
// 
// kaprekarNumbers(num1, num2) ➞ str
// 
// ------------------------------------------------------------------------------------------------

const kaprekarNumbers = (num1, num2) => {
    let list = "";
    for(let i = num1; i <= num2; i++) {
        let n = i;
        let d = n.toString().length;
        (+`${n*n}`.slice(-d)) + (+`${n*n}`.slice(0, -d)) === i ? list += ` ${i}` : null;
    }
    return list !== "" ? list : "INVALID RANGE";
}

console.log(kaprekarNumbers(1, 1000))
// console.log(kaprekarNumbers(3, 8)) // ➞ "INVALID RANGE"
// console.log(kaprekarNumbers(1, 10)) // ➞ "1 9"
// console.log(kaprekarNumbers(100, 250)) // ➞ "INVALID RANGE"
// console.log(kaprekarNumbers(100, 300)) // ➞ "297"
// console.log(kaprekarNumbers(1, 100)) // ➞ "1 9 45 55 99"
// console.log(kaprekarNumbers(10000, 10000000))


        // ** long version **
        // let square = Math.pow(n, 2).toString();
        // let splitStart = +square.slice(0, -d);
        // let splitEnd = +square.slice(-d);
        // if(splitStart + splitEnd === i) console.log("match", i)
        