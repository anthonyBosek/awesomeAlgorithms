// ** Calculate the Total Price of Groceries **
// 
// Create a function that takes an array of objects (groceries) which calculates the total price
// and returns it as a number. A grocery object has a product, a quantity and a price, 
// for example:
//  {
//    "product": "Milk",
//    "quantity": 1,
//    "price": 1.50
//  }
// 
// getTotalPrice(arr) → num
// 
// ------------------------------------------------------------------------------------------------

const getTotalPrice = (arr) => {
    let total = 0;
    arr.map(x => total += (x.quantity * x.price));
    return +total.toFixed(2);
}


console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 }])) // return 1.5

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
])) // return 4

console.log(getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
])) // return 4.5

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
])) // return 10.4

console.log(getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
])) // return 0.3
    
