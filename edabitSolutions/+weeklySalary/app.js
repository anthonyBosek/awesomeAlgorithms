// ** Weekly Salary **
// 
// Write a function that takes a list of hours and returns the total weekly salary.
//  • The input list hours is listed sequentially, ordered from Monday to Sunday.
//  • A worker earns $10 an hour for the first 8 hours.
//  • For every overtime hour, he earns $15.
//  • On weekends, the employer pays double the usual rate, regardless how many hours
//      were worked previously that week. For instance, 10 hours worked on a weekday would
//      pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.
// 
// Notes:
//  • Every element in the array is greater than or equal to 0.
// 
// weeklySalary(arr) ➞ num
// 
// ------------------------------------------------------------------------------------------------

const weeklySalary = (arr) => {
    let pay = 10
    let ot = pay * 1.5
    let data = arr.map((x) => x > 8 ? 8 * pay + (x - 8) * ot : x * pay)
    return data.map((y, i) => i <= 4 ? y : 2 * y).reduce((a, b) => a + b)

    // return arr.map((x, i) => {
    //     let pay = 0
    //     if(i <= 4){
    //         if(x <= 8){
    //             pay = pay + (x * 10)
    //         } else {
    //             let ot = x - 8
    //             let reg = x - ot
    //             pay = pay + (reg * 10) + (ot * 15)
    //         }
    //     } else {
    //         if(x > 0){
    //             let ot = x - 8
    //             let reg = x - ot
    //             pay = pay + (reg * 20) + (ot * 30)
    //         }
    //     }
    //     return pay
    // }).reduce((a, b) => a + b)
} //

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0])) // ➞ 400
console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0])) // ➞ 410
console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0])) // ➞ 280
console.log(weeklySalary([8, 8, 8, 8, 8, 12, 0])) // ➞ 680
