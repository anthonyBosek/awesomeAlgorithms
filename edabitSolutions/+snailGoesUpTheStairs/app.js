// ** Snail Goes Up the Stairs **
// 
// A snail goes up the stairs. Every step, he must go up the step, then go across to
// the next step. He wants to reach the top of the tower. Write a function that returns
// the distance the snail must travel to the top of the tower given the height and
// length of each step and the height of the tower.
// 
// Notes
//  •All given values are greater than 0 .
//  •Round answers to the nearest tenth 0.1 .
//  •Number of steps determined by tower height divided by stair height.
//  •The last step's length must be counted to complete the journey.
// 
// totalDistance(x,y,z) ➞ num
// 
// ------------------------------------------------------------------------------------------------

const totalDistance = (ht, lth, tow) => {
    let stHt = ht + lth
    let strs = tow / ht

    // returns a string with one decimal place
    // return (stHt * strs).toFixed(1)
    
    // returns a number with one decimal place other than 0
    return +(stHt * strs).toFixed(1)
} //

console.log(totalDistance(0.2, 0.4, 100.0)) // ➞ 300.0
// Total distance is 300.
console.log(totalDistance(0.3, 0.2, 25.0)) // ➞ 41.7
console.log(totalDistance(0.1, 0.1, 6.0)) // ➞ 12.0
