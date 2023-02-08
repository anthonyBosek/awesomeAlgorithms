// ** Ascending Consecutive Numbers **
// 
// Write a function that returns true if a string consists of 
// ascending or ascending AND consecutive numbers.
// Notes:
//  • A number can consist of any number of digits, so long as the numbers are 
//    adjacent to each other, and the string has at least two of them.
// 
// ascending(str) ➞ bool
// 
// ------------------------------------------------------------------------------------------------

const ascending = (str) => {
    let half = Math.ceil(str.length / 2);

    for(let i = half; i > 0; i--) {
        let firstNum = +str.slice(0,i);
        let numArr = str.split("");

        for(let j = 0; j < str.length / i; j++) {
            let nextNum = +numArr.splice(0, i).join("");
            if(nextNum === firstNum) continue;
            if(nextNum === firstNum + 1) firstNum = nextNum;
            else break;
            if(j === str.length / i - 1) return true;
        }
    }
    return false;
};



console.log(ascending("232425")) // return ➞ true
// Consecutive numbers 23, 24, 25

console.log(ascending("2324256")) // return ➞ false
// No matter how this string is divided, the numbers are not ascending or ascending AND consecutive.

console.log(ascending("444445")) // return ➞ true
// Consecutive numbers 444 and 445.

console.log(ascending("123456789")) // return ➞ true
console.log(ascending("123412351234")) // return ➞ false