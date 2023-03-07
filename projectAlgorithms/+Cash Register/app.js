// JavaScript Algorithms and Data Structures Projects: Cash Register
// 
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first
// argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency. The checkCashRegister() function should always return an
// object with a status key and a change key. Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer
// is less than the change due, or if you cannot return the exact change. Return {status: "CLOSED", change: [...]}
// with cash-in-drawer as the value for the key change if it is equal to the change due. Otherwise, return
// {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order,
// as the value of the change key.
// 
// checkCashRegister(price, cash, cid) ➞ obj
//

const checkCashRegister = (price, cash, cid) => {
    let values = [ 100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01 ]
    let coh = [...cid]
    let dif = cash - price
    let emptyTil = dif === coh.map(d => d[1]).reduce((a, b) => a + b)
    let changeDue = coh.reverse().map(([ lab, den ], i) => {
        if(dif > values[i] && den != 0) {
            let count = 0
            while(den > 0 && dif - values[i] >= 0) {
                count += values[i]
                den -= values[i]
                dif = +(dif - values[i]).toFixed(2)
            } //
            return [ lab, count ]
        } //
    }).filter(x => x !== undefined) //
    return dif > 0 ? { status: "INSUFFICIENT_FUNDS", change: [] } :
    emptyTil ? { status: "CLOSED", change: cid } :
    { status: "OPEN", change: changeDue }
} //

// for loop 
// const checkCashRegister = (pr, ch, cid) => {
//     let val = [ 0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100 ]
//     let coh = [...cid]
//     let dif = ch - pr
//     let emp = dif === coh.map(d => d[1]).reduce((a, b) => a + b)
//     let due = []
//     for(let i = coh.length - 1; i >= 0; i--) {
//         if(dif > val[i] && coh[i][1] != 0) {
//             let cnt = 0
//             while(coh[i][1] > 0 && dif - val[i] >= 0) {
//                 cnt += val[i]
//                 coh[i][1] -= val[i]
//                 dif = +(dif - val[i]).toFixed(2)
//             } //
//             due.push([coh[i][0], cnt])
//         } //
//     } //
//     return dif > 0 ? { status: "INSUFFICIENT_FUNDS", change: [] } :
//         emp ? { status: "CLOSED", change: cid } :
//         { status: "OPEN", change: due }
// } //

console.log(checkCashRegister(190.5, 500, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// ➞ an object
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// ➞ {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// ➞ {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// ➞ {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// ➞ {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// ➞ {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}