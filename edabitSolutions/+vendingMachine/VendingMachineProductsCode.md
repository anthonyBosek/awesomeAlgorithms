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
  { number: 9, price: 80,  name: 'Small snack' },
];

// Tests
Test.assertSimilar(vendingMachine(products, 500, 8), { product: 'Potato chips', change: [ 200, 50, 20, 10 ] });
Test.assertSimilar(vendingMachine(products, 500, 1), { product: 'Orange juice', change: [ 200, 200 ] });
Test.assertSimilar(vendingMachine(products, 200, 7), { product: 'Crackers', change: [ 50, 20, 10 ] });
Test.assertSimilar(vendingMachine(products, 100, 9), { product: 'Small snack', change: [ 20 ] });
Test.assertSimilar(vendingMachine(products, 1000, 6), { product: 'Condoms', change: [ 500 ] });
Test.assertSimilar(vendingMachine(products, 250, 4), { product: 'Cookies', change: [] });
Test.assertEquals(vendingMachine(products, 500, 0), 'Enter a valid product number');
Test.assertEquals(vendingMachine(products, 90, 1), 'Not enough money for this product');
Test.assertEquals(vendingMachine(products, 0, 0), 'Enter a valid product number');