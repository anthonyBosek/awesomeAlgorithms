// Basic Algorithm Scripting: Truncate a String 
// 
// Truncate a string (first argument) if it is longer than the given maximum string
// length (second argument). Return the truncated string with a ... ending.
// 
// truncateString(str, num) ➞ str
// 

const truncateString = (str, num) => {
    if(num >= str.length) return str.slice(0, num);
    return str.slice(0, num) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // ➞ "A-tisket..."
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)) // ➞ "Peter Piper..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
 // ➞ "A-tisket a-tasket A green and yellow basket"
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
 // ➞ "A-tisket a-tasket A green and yellow basket"
console.log(truncateString("A-", 1)) // ➞ "A..."
console.log(truncateString("Absolutely Longer", 2)) // ➞ "Ab..."