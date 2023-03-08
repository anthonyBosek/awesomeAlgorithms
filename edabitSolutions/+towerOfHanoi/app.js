// ** Tower of Hanoi **
// 
// There are three towers. The objective of the game is to move all the disks over to tower #3,
// but you can't place a larger disk onto a smaller disk.
// 
// Notes:
//  • The amount of discs is always a positive integer.
//  • 1 disc can be changed per move.
// 
// towerHanoi(num) ➞ num
// 
// ------------------------------------------------------------------------------------------------

const towerHanoi = (num) => {
    let mvs = 0
    for (let i = 0, n = 1; i < num; i++) {
        mvs += n
        n *= 2
    }
    return mvs
} //

console.log(towerHanoi(3)) // ➞ 7
console.log(towerHanoi(4)) // ➞ 15
console.log(towerHanoi(5)) // ➞ 31
console.log(towerHanoi(0)) // ➞ 0
