// ** Broken Keyboard **
// 
// Given what is supposed to be typed and what is actually typed, write a function that returns
// the broken key(s). The function looks like: 
//     findBrokenKeys(correct phrase, what you actually typed)
// Notes:
//  • Broken keys should be ordered by when they first appear in the sentence.
//  • Only one broken key per letter should be listed.
//  • Letters will all be in lower case.
// 
// findBrokenKeys(str1,str2) ➞ arr
// 
// ------------------------------------------------------------------------------------------------

const findBrokenKeys = (str1, str2) => {
    let correct = str1.split("");
    let actual = str2.split("");
    return correct
        .filter((x, i) => x !== actual[i])
        .filter((item, index, arr) => arr.indexOf(item) == index);
}


console.log(findBrokenKeys("happy birthday", "hawwy birthday")); //  ➞ ["p"]
console.log(findBrokenKeys("starry night", "starrq light")); //  ➞ ["y", "n"]
console.log(findBrokenKeys("beethoven", "affthoif5")); //  ➞ ["b", "e", "v", "n"]