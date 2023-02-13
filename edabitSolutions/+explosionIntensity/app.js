// ** Explosion Intensity **
// 
// Given a number, return a string of the word "Boom" , which varies in the following ways:
// The string should include n number of "o"s, unless n is below 2 (in that case, return "boom" ).
//  •If n is evenly divisible by 2, add an exclamation mark to the end.
//  •If n is evenly divisible by 5, return the string in ALL CAPS.
//  •If n is evenly divisible by both 2 and 5, return the string in ALL CAPS 
//     and add an exclamation mark to the end.
//  •"Boom" will always start with a capital "B", except when n is less than 2,
//     then return a minature explosion as "boom" .
// 
// boomIntensity(num) ➞ str
// 
// ------------------------------------------------------------------------------------------------

const boomIntensity = (n) => {
    if(n < 2) return 'boom'
    let o = ''
    for(let i = 1; i <= n; i++) {
        o += 'o'
    }
    if(n % 10 === 0)return `B${o.toUpperCase()}M!`
    if(n % 5 === 0)return `B${o.toUpperCase()}M`
    if(n % 2 === 0)return `B${o}m!`
} //


console.log(boomIntensity(4)) // ➞ "Boooom!"
console.log(boomIntensity(1)) // ➞ "boom"
console.log(boomIntensity(5)) // ➞ "BOOOOOM"
console.log(boomIntensity(10)) // ➞ "BOOOOOOOOOOM!"
console.log(boomIntensity(15)) // ➞ "BOOOOOOOOOOOOOOOM"
console.log(boomIntensity(8)) // ➞ "Boooooooom!"
console.log(boomIntensity(20)) // ➞ "BOOOOOOOOOOOOOOOOOOOOM!"