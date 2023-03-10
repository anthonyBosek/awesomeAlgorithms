// // ** Regular Expressions **
// // 

// let sample = "abcdefghijklmnopqrstuvwxyz";
// let vowels = [];
// let myRegEx = /a|e|i|o|u/;
// let arr = sample.split("");
// let mapCheck = arr.filter((letter, i, arr) => {
//     if(myRegEx.test(letter)){
//         return [letter, i]
//     }
// });


// console.log(mapCheck)

let myArr = [
    {
        name: 'Chris',
        age: 43,
        rank: 'First'
    },
    {
        name: 'Anthony',
        age: 41,
        rank: 'Second'
    },
    {
        name: 'Nicole',
        age: 39,
        rank: 'Third'
    },
    {
        name: 'Kasha',
        age: 36,
        rank: 'Fourth'
    },
]

const test = (arr) => {
    console.log(arr.filter(x => x.name === 'Anthony').pop())
    return arr.filter(x => x.name === 'Chris').shift()
}

console.log(test(myArr))