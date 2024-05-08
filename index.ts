#! /usr/bin/env node 

import inquirer from "inquirer";

// //Asking for Roll Number
let roll = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Enter your roll number"
});
// //Roll Number 
let rollNum:number = roll.num1;

// //Checking Roll Number
if(rollNum === 112233 ){
     //Asking for Marks
    let marks = await inquirer.prompt([
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
    ])
    // Extract marks
    let eng:number = marks.English;
    let urdu:number = marks.Urdu;
    let math:number = marks.Maths;


    //Percentage
    let totalMarks:number = 300;
    let obtainMarks:number = eng + urdu + math;
    let percent = ((obtainMarks/totalMarks)*100);
    console.log(percent);

    //answer 
    console.log("Name: Urooj");
    console.log("Fathername: Khalid");
    console.log(`English marks = ${eng} out of 100`);
    console.log(`Urdu marks = ${urdu} out of 100`);
    console.log(`Maths marks = ${math} out of 100`);
    //Obtaine Marks + Total Marks
    console.log(`Obtained Marks = ${obtainMarks} Total marks = ${totalMarks}`);
    // Percentage 
    console.log(`Percentage ${percent} %`);
    
    if(percent <= 40 ){
             console.log("Your Grade is C");
             
    } else if(percent <= 60){
               console.log("Your Grade is B");        
    } else if(percent <= 80){
             console.log("Your Grade is A");
    } else if(percent <= 90){
        console.log("Your Grade is A+");
}
    else{
        console.log("You are Failed in Exam");
        
    }

}



