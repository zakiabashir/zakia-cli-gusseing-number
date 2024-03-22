#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will generate a random number - done
// 2) user input for gussing number - done
//  3) compare user input with computer generated number and show result do
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
    name : "usergussednumber",
    type : "number",
    message : "please guess a number between 1-20: ",
},
]);
if( answers.usergussednumber === randomNumber )
{
    console.log("congragulation! you gussed the right number")
}
else {
    console.log( " you gussed the wrong number")
}