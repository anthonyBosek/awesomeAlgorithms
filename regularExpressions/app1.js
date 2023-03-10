// global variables from the DOM
let testStr = document.getElementById("testStr");
let testRegEx = document.getElementById("testRegEx");
let ignore = document.getElementById("ignore");
let global = document.getElementById("global");
let btn = document.getElementById("btn");

// regular expression check function
const regExCheck = (str, regEx) => {
    
    // create new regular expression from input string
    regEx = ignore.checked && global.checked ? new RegExp(regEx, "gi") :
            ignore.checked ? new RegExp(regEx, "i") :
            global.checked ? new RegExp(regEx, "g") :
            new RegExp(regEx);

    let match = str.match(regEx); // match()
    let test = regEx.test(str); // test()

    console.log("match", match);
    console.log("test", test);

}

// event listener for button
btn.addEventListener("click", () => regExCheck(testStr.value, testRegEx.value));