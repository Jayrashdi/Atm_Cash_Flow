#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 11223;
let pinEntry = await inquirer.prompt([
    {
        name: "Pin",
        message: "Enter Your Pin!",
        type: "number"
    }
]);
if (pinEntry.Pin === myPin) {
    console.log("Correct Pin Code. Welcome To Your Account!");
    let operationMenu = await inquirer.prompt([
        {
            name: "Menu",
            message: "Please Select Any Option!",
            type: "list",
            choices: [
                "Withdraw",
                "Check Balance",
                "Fast Cash",
                "Exit"
            ]
        }
    ]);
    if (operationMenu.Menu === "Withdraw") {
        let withdrawManager = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter Your Amount!",
                type: "number"
            }
        ]);
        if (withdrawManager.Amount > myBalance) {
            console.log("Insufficient Amount. Please Enter The valid Amount.");
        }
        else if (myBalance -= withdrawManager.Amount) {
            console.log(`Your Remaining Amount is: ${myBalance}`);
        }
    }
    else if (operationMenu.Menu === "Check Balance") {
        console.log(`Your Current Amount Is: ${myBalance}`);
    }
    else if (operationMenu.Menu === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "Cash",
                message: "Please Select Any Amount.",
                type: "list",
                choices: [
                    1000,
                    5000,
                    10000,
                    20000
                ]
            }
        ]);
        if (myBalance -= fastCash.Cash) {
            console.log(`Your Remaining Amount Is: ${myBalance}`);
        }
    }
    else if (operationMenu.Menu === "Exit") {
        console.log("Exiting The Program. Good Day!");
    }
}
else
    console.log("Incorrect Pin Code. Try Again.");
