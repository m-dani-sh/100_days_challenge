// Question #2
var fullName = "Muhammad Danish";
console.log("hello ".concat(fullName));
// Question #3
var personName = "muhammad danish";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
var words = personName.split(" ");
var titlecaseName = "";
for (var i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
