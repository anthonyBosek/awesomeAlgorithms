// ** Pandigital Numbers **
// 
// A pandigital number contains all digits (0-9) at least once. Write a function that takes an
// integer, returning true if the integer is pandigital, and false otherwise.
// 
// isPandigital(num) ➞ bool
// 
// ------------------------------------------------------------------------------------------------

const isPandigital = (num) => {
    let str = num.toString();
    console.log(str)
    // let missing = [];
    for(let i = 0; i <= 9; i++) {
        if(str.indexOf(i) === -1){
            // missing.push(i)
            return false;
        }
    }
    // if(missing.length > 0){
    //     return false + " missing " + missing;
    // }
    return true;
}
// commented code will return array of missing digits

console.log(isPandigital(124567898578518274587245742895n)); // ➞ false
console.log(isPandigital(98140723568910)); // ➞ true
console.log(isPandigital(90864523148909)); // ➞ false (7 is missing)
console.log(isPandigital(112233445566778899n)); // ➞ false