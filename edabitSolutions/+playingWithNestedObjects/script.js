// ** Playing with Nested Objects **
// 
// Create a function that takes an object and returns an object of all entries having unique marks. 
// If the marks are the same, take who is eldest.
// 
// getObject(obj) ➞ obj
// 
// ------------------------------------------------------------------------------------------------

const getObject = (obj) => {
    let keys = Object.keys(obj);
    let marksArr = [];
    return keys.filter((key, i) => {
        let { marks } = obj[key];
        marksArr.push(marks);
        return marksArr.indexOf(marks) === i;
    }).map(key => obj[key]);
};

console.log(getObject({
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 17, name: "julie", marks: "400" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "3": { age: 16, name: "Bella", marks: "300" }
})) 
// return ➞ {
//         "0": { age: 18, name: "john", marks: "400" },
//         "1": { age: 16, name: "Robin", marks: "200" },
//         "2": { age: 16, name: "Bella", marks: "300" }
//     }

console.log(getObject({
    0: {age: 18, name: 'john', marks: '400'},
    1: {age: 17, name: 'julie', marks: '400'},
    2: {age: 16, name: 'Robin', marks: '200'},
    3: {age: 16, name: 'Bella', marks: '300'},
    4: {age: 16, name: 'john', marks: '250'},
    5: {age: 15, name: 'julie', marks: '250'}
}) )
// return ➞ {
//         0: {age: 18, name: 'john', marks: '400'},
//         1: {age: 16, name: 'Robin', marks: '200'},
//         2: {age: 16, name: 'Bella', marks: '300'},
//         3: {age: 16, name: 'john', marks: '250'}
//     }
    