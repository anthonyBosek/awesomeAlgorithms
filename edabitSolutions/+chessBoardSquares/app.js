// ** Chess Board Squares **
// 
// Create a function that takes a chess board square's coordinate and return its color.
// 
// chessBoard(str) ➞ str
// 
// ------------------------------------------------------------------------------------------------

const chessBoard = (str) => {
    const alpha = 'abcdefgh'
    let [ ltr, nbr ] = str.split('')
    let ltrBoo = alpha.indexOf(ltr) % 2 === 0
    let nbrBoo = nbr % 2 === 0
    return ltrBoo === nbrBoo ? 'white' : 'black'
} //

console.log(chessBoard("a1")) // ➞ "black"
console.log(chessBoard("e5")) // ➞ "black"
console.log(chessBoard("d1")) // ➞ "white"
console.log(chessBoard("a8")) // ➞ "white"
console.log(chessBoard("d7")) // ➞ "white"
console.log(chessBoard("g5")) // ➞ "black"