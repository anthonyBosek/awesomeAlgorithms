// ** Smiley Faces :) **
// 
// You will be given a string containing only the following characters: " ( : ) " . Create a function
// that returns a number based on the quantity of happy and sad faces contained in the given string.
//  • The happy faces ":)" and "(:" are worth 1.
//  • The sad faces ":(" and "):" are worth -1.
// 
// happinesNumber(str) → num
// 
// ------------------------------------------------------------------------------------------------

const happinessNumber = (str) => {
    let sum = 0;
    let arr = str.split("");
    for(let i = 0; i < arr.length - 1; i++) {
        let face = arr.slice(i, i+2).join("");
        face === ":)" ? sum += 1 : face === "(:" ? sum += 1 : 
        face === ":(" ? sum -= 1 : face === "):" ? sum -= 1 : null;
    }
    return sum;
}


console.log(happinessNumber(":):("));
console.log(happinessNumber("(:)"));
console.log(happinessNumber(")::(:(:"));
console.log(happinessNumber("(:):):(:(:)"));
console.log(happinessNumber("):(:):():(:"));