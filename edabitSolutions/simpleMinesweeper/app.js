// ** Simple Minesweeper **
//
// Given a 2D array of mines, replace the question mark with the number of mines that immediately
// surround it. This includes the diagonals, meaning it is possible for it to be surrounded by 8
// mines maximum.
//
// The key is as follows:
//  • An empty space: "-"
//  • A mine: "#"
//  • Number showing number of mines surrounding it: "?"
//
// Notes:
//  • You will only be given 3x3 grids.
//  • The question mark is not limited to the centre (there may be multiple question marks).
//
// minesweeper(arr) ➞ arr
//
// ------------------------------------------------------------------------------------------------

const minesweeper = (arr) => {
  return arr.map((x) =>
    x.map((y) => (y === "?" ? true : y === "#" ? "💣" : null))
  );
}; //

// console.log(minesweeper([
//         ["-", "#", "-"],
//         ["-", "?", "-"],
//         ["-", "-", "-"]
//     ]))
//     // ➞ [
//     //     ["-", "#", "-"],
//     //     ["-", "1", "-"],
//     //     ["-", "-", "-"]
//     // ]
// console.log(minesweeper([
//         ["-", "#", "-"],
//         ["#", "-", "?"],
//         ["#", "#", "-"]
//     ]))
//     // ➞ [
//     //     ["-", "#", "-"],
//     //     ["#", "-", "2"],
//     //     ["#", "#", "-"]
//     // ]
// console.log(minesweeper([
//         ["-", "#", "#"],
//         ["?", "#", ""],
//         ["#", "?", "-"]
//     ]))
//     // ➞ [
//     //     ["-", "#", "#"],
//     //     ["3", "#", ""],
//     //     ["#", "2", "-"]
//     // ]
// console.log(minesweeper([
//         ["-", "-", "#"],
//         ["?", "-", "-"],
//         ["-", "-", "-"]
//     ]))
//     // ➞ [
//     //     ["-", "-", "#"],
//     //     ["0", "-", "-"],
//     //     ["-", "-", "-"]
//     // ]
