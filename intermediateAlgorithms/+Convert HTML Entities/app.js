// Intermediate Algorithm Scripting: Convert HTML Entities
// 
// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.
// 
// convertHTML(str) ➞ str
// 

let entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&apos;" };

const convertHTML = (str) => {
    let keys = Object.keys(entities);
    return str.split("").map(char => char === keys.filter(sym => sym === char)[0] ? entities[char] : char).join("");
}

console.log(convertHTML("Dolce & Gabbana")) // ➞ Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos")) // ➞ Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML("Sixty > twelve")) // ➞ Sixty &gt; twelve
console.log(convertHTML('Stuff in "quotation marks"')) // ➞ Stuff in &quot;quotation marks&quot;
console.log(convertHTML("Schindler's List")) // ➞ Schindler&apos;s List
console.log(convertHTML("<>")) // ➞ &lt;&gt;
console.log(convertHTML("abc")) // ➞ abc