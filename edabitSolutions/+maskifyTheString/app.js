// ** Maskify the String **
// 
// Usually when you sign up for an account to buy something, your credit card number,
// phone number or answer to a secret question is partially obscured in some way.
// Since someone could look over your shoulder, you don't want that shown on your
// screen. Hence, the website masks these strings.
// 
// Your task is to create a function that takes a string, transforms all but the last
// four characters into "#" and returns the new masked string.
// 
// maskify(str) ➞ str
// 
// ------------------------------------------------------------------------------------------------

const maskify = (str) => {
    // grab index of last 4 digits
    let stop = str.length - 4

    // solution with map()
    return str.split('').map((x, i) => i < stop ? '#' : x).join('')

    // solution with slice, replace & regEx
    // let hidden = str.slice(0, stop).replace(/\d/g, '#')
    // let shown = str.slice(stop)
    // return hidden + shown
} //

console.log(maskify("45563641578966079356166879")) // ➞ "######################6879"
console.log(maskify("4556364607935616")) // ➞ "############5616"
console.log(maskify("64607935616")) // ➞ "#######5616"
console.log(maskify("1")) // ➞ "1"
console.log(maskify("")) // ➞ ""