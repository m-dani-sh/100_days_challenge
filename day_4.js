//Question #1;
//my name is danish 
//let my_name: string = "Danish"
//age is 19
//let age: number = 19;


//Question #2;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var names = ["Danish", "Arsalan", "Ishaq"];
names.forEach(function (name) {
    //console.log(name);
});
exports.default = names;


//Question #3;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_2_1 = require("./task_2");
//let names: string[] = ["Danish", "Arsalan", "Ishaq"];
task_2_1.default.forEach(function (name) {
    console.log("Hello, ".concat(name, "! Have a great day!"));
});
