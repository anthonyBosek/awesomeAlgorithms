// Intermediate Algorithm Scripting: Make a Person
// 
// Fill in the object constructor with the following methods below:
// 
//  getFirstName()
//  getLastName()
//  getFullName()
//  setFirstName(first)
//  setLastName(last)
//  setFullName(firstAndLast)
// 
// Run the tests to see the expected output for each method. The methods that take an
// argument must accept only one argument and it has to be a string. These methods must
// be the only available means of interacting with the object.
// 

const Person = function(firstAndLast) {
    let [ firstName, lastName ] = firstAndLast.split(" ")
    this.getFirstName = () => {
        return firstName
    } //
    this.getLastName = () => {
        return lastName
    } //
    this.getFullName = () => {
        return firstName + " " + lastName
    } //
    this.setFirstName = (first) => {
        firstName = first
    } //
    this.setLastName = (last) => {
        lastName = last
    } //
    this.setFullName = (newFirstAndLast) => {
        let [ newFirst, newLast ] = newFirstAndLast.split(" ")
        firstName = newFirst
        lastName = newLast
    } //
} //

var bob = new Person('Bob Ross');

console.log(Object.keys(bob).length) // ➞ 6
console.log(bob instanceof Person) // ➞ true
console.log(bob.firstName) // ➞ undefined
console.log(bob.lastName) // ➞ undefined
console.log(bob.getFirstName()) // ➞ "Bob"
console.log(bob.getLastName()) // ➞ "Ross"
console.log(bob.getFullName()) // ➞ "Bob Ross"
// bob.setFirstName("Haskell")
console.log(bob.getFullName()) // ➞ "Haskell Ross" after bob.setFirstName("Haskell")
// bob.setLastName("Curry")
console.log(bob.getFullName()) // ➞ "Haskell Curry" after bob.setLastName("Curry")
// bob.setFullName("Haskell Curry")
console.log(bob.getFullName()) // ➞ "Haskell Curry" after bob.setFullName("Haskell Curry")
console.log(bob.getFirstName()) // ➞ "Haskell" after bob.setFullName("Haskell Curry")
console.log(bob.getLastName()) // ➞ "Curry" after bob.setFullName("Haskell Curry")