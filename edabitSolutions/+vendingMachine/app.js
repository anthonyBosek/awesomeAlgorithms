// ** Vending Machine **
// 
// description -- reference photo in file
// 
// vendingMachine(arr, num, num) ➞ obj
// 
// ------------------------------------------------------------------------------------------------

const vendingMachine = (arr, money, item) => {
    if(item <= 0 || item > arr.length) return 'Enter a valid product number'
    let product = arr.filter(x => x.number === item)[0]
    let change = money - product.price
    if(change < 0) return 'Not enough money for this product'
    let changeArr = []
    vals.map(val => {
        while(change > 0 && change - val >= 0) {
            change = change - val
            changeArr.push(val)
        }
    })
    return { product: product.name, change: changeArr }
} //

// Change values
const vals = [500, 200, 100, 50, 20, 10]
// Products available
const products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Condoms' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80, name: 'Small snack' },
]

console.log(vendingMachine(products, 500, 8)) // ➞ { product: 'Potato chips', change: [ 200, 50, 20, 10 ] }
console.log(vendingMachine(products, 500, 1)) // ➞ { product: 'Orange juice', change: [ 200, 200 ] }
console.log(vendingMachine(products, 200, 7)) // ➞ { product: 'Crackers', change: [ 50, 20, 10 ] }
console.log(vendingMachine(products, 100, 9)) // ➞ { product: 'Small snack', change: [ 20 ] }
console.log(vendingMachine(products, 1000, 6)) // ➞ { product: 'Condoms', change: [ 500 ] }
console.log(vendingMachine(products, 250, 4)) // ➞ { product: 'Cookies', change: [] }
console.log(vendingMachine(products, 500, 0)) // ➞ 'Enter a valid product number'
console.log(vendingMachine(products, 90, 1)) // ➞ 'Not enough money for this product'
console.log(vendingMachine(products, 0, 0)) // ➞ 'Enter a valid product number'