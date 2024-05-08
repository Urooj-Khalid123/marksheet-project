#! /usr/bin/env node 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// //Asking for Roll Number
var roll = await inquirer_1.default.prompt({
    name: "num1",
    type: "number",
    message: "Enter your roll number"
});
// //Roll Number 
var rollNum = roll.num1;
// //Checking Roll Number
if (rollNum === 112233) {
    //Asking for Marks
    var marks = await inquirer_1.default.prompt([
        {
            name: "English",
            type: "number",
            message: "Please enter your english number",
        },
        {
            name: "Urdu",
            type: "number",
            message: "Please enter your urdu number",
        },
        {
            name: "Maths",
            type: "number",
            message: "Please enter your Maths number",
        }
    ]);
    // Extract marks
    var eng = marks.English;
    var urdu = marks.Urdu;
    var math = marks.Maths;
    //Percentage
    var totalMarks = 300;
    var obtainMarks = eng + urdu + math;
    var percent = ((obtainMarks / totalMarks) * 100);
    console.log(percent);
    //answer 
    console.log("Name: Urooj");
    console.log("Fathername: Khalid");
    console.log("English marks = ".concat(eng, " out of 100"));
    console.log("Urdu marks = ".concat(urdu, " out of 100"));
    console.log("Maths marks = ".concat(math, " out of 100"));
    //Obtaine Marks + Total Marks
    console.log("Obtained Marks = ".concat(obtainMarks, " Total marks = ").concat(totalMarks));
    // Percentage 
    console.log("Percentage ".concat(percent, " %"));
    if (percent <= 40) {
        console.log("Your Grade is C");
    }
    else if (percent <= 60) {
        console.log("Your Grade is B");
    }
    else if (percent <= 80) {
        console.log("Your Grade is A");
    }
    else if (percent <= 90) {
        console.log("Your Grade is A+");
    }
    else {
        console.log("You are Failed in Exam");
    }
}
