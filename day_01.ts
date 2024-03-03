// Question #2

let fullName : string = "Muhammad Danish";
console.log(`hello ${fullName}`);

// Question #3
let personName : string = "muhammad danish";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
let words = personName.split(" ");
let titlecaseName = "";
 for (let i = 0; i < words.length; i++) {
titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";} ; 
console.log(titlecaseName);

