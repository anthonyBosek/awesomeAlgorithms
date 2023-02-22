// const matchCheck = (str) => {
// let regEx = //g;
// let match = str.match(regEx);
// console.log(match);
// }

// matchCheck("john mike $am he!lo")
// matchCheck("bo$ek006")
// matchCheck("7abcde!gh")
// matchCheck("abcdef!23")
// matchCheck("!abcred23")

let myArr = [2,3,4,5,6,7,8,9,10];
const prime = (arr) => {

    let non = [];
    let prime = [];
    let value = arr.pop()

    for(let i = 0; i < arr.length; i++) {
        if(value % arr[i] === 0) {
            non.push(value);
            value = arr.pop();
            i = -1;
        } else {
            if(i === arr.length - 1) {
                prime.push(value);
                value = arr.pop();
                i = -1;
            } else {
                continue;
            }
        }
    }
    prime.push(value)

    console.log("n", non)
    console.log("p", prime)
}

prime(myArr);