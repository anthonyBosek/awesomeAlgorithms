// Basic Algorithm Scripting: Boo who 
// 
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.
// 
// booWho(val) ➞ bool
// 

const booWho = (val) => {
    return typeof val === "boolean" ? true : false
}

console.log(booWho(NaN)) // ➞ false
console.log(booWho(null)) // ➞ false
console.log(booWho(undefined)) // ➞ false
console.log(booWho(true)) // ➞ true
console.log(booWho(false)) // ➞ true
console.log(booWho([1, 2, 3])) // ➞ false
console.log(booWho([].slice)) // ➞ false
console.log(booWho({ "a": 1 })) // ➞ false
console.log(booWho(1)) // ➞ false
console.log(booWho("a")) // ➞ false
console.log(booWho("true")) // ➞ false
console.log(booWho("false")) // ➞ false