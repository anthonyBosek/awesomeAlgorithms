// JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
// 
// Return true if the passed string looks like a valid US phone number. The user may fill out the
// form field any way they choose as long as it has the format of a valid US number.The area code
// is required. If the country code is provided, you must confirm that the country code is 1.
// 
// telephoneCheck(str) ➞ bool
//

const telephoneCheck = (str) => {
    return /^1?[ -]?((\d{3})|\((\d{3})\))[ -]?(\d{3})[ -]?(\d{4})$/.test(str);
}

console.log(telephoneCheck("555-555-5555")) // ➞ a boolean
console.log(telephoneCheck("1 555-555-5555")) // ➞ true
console.log(telephoneCheck("1 (555) 555-5555")) // ➞ true
console.log(telephoneCheck("5555555555")) // ➞ true
console.log(telephoneCheck("555-555-5555")) // ➞ true
console.log(telephoneCheck("(555)555-5555")) // ➞ true
console.log(telephoneCheck("1(555)555-5555")) // ➞ true
console.log(telephoneCheck("555-5555")) // ➞ false
console.log(telephoneCheck("5555555")) // ➞ false
console.log(telephoneCheck("1 555)555-5555")) // ➞ false
console.log(telephoneCheck("1 555 555 5555")) // ➞ true
console.log(telephoneCheck("1 456 789 4444")) // ➞ true
console.log(telephoneCheck("123**&!!asdf#")) // ➞ false
console.log(telephoneCheck("55555555")) // ➞ false
console.log(telephoneCheck("(6054756961)")) // ➞ false
console.log(telephoneCheck("2 (757) 622-7382")) // ➞ false
console.log(telephoneCheck("0 (757) 622-7382")) // ➞ false
console.log(telephoneCheck("-1 (757) 622-7382")) // ➞ false
console.log(telephoneCheck("2 757 622-7382")) // ➞ false
console.log(telephoneCheck("10 (757) 622-7382")) // ➞ false
console.log(telephoneCheck("27576227382")) // ➞ false
console.log(telephoneCheck("(275)76227382")) // ➞ false
console.log(telephoneCheck("2(757)6227382")) // ➞ false
console.log(telephoneCheck("2(757)622-7382")) // ➞ false
console.log(telephoneCheck("555)-555-5555")) // ➞ false
console.log(telephoneCheck("(555-555-5555")) // ➞ false
console.log(telephoneCheck("(555)5(55?)-5555")) // ➞ false