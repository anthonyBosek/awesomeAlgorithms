// Coloured Triangles
// 
// A coloured triangle is created from different rows of colours (Red, Green or Blue). Successive
// rows, each containing one fewer colour than the last, are generated by considering the two
// touching colours in the previous row. If these colours are identical, the same colour is used in
// the new row. If colours are different, the missing colour is used in the new row. This process
// continues untill a single colour is generated in the final row.
// 
// Goal:
// • Create a function which takes first row of the triangle as an input and
//      returns the final colour which would appear at the bottom row. In above
//      example, given input "RRGBRGBB" will return "G".
// • If you are only given one colour as the input, return that colour.
// • There will be no exception handling case.
// 
// colouredTriangle(str) ➞ str

const colouredTriangle = (str) => {
    let col = ['R', 'G', 'B']
    let arr = str.split('')
    while (arr.length > 1) {
        arr = arr
            .map((x, i, a) => (
                a[i + 1] ?
                    x === a[i + 1] ?
                        x :
                        col.filter(y => !(x + a[i + 1]).includes(y))[0]
                    : null
            ))
            .filter(z => z)
    }
    return arr.join('')
}
console.log(colouredTriangle("B")) // ➞ "B"
console.log(colouredTriangle("GB")) // ➞ "R"
console.log(colouredTriangle("RB")) // ➞ "G"
console.log(colouredTriangle("GR")) // ➞ "B"
console.log(colouredTriangle("RBRGBRB")) // ➞ "G"
console.log(colouredTriangle("RRGBRGBB")) // ➞ "G"