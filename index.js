/***********************************************************************
 Name of task: Rob's car rentals
 Name: Reuben Holdsworth
 Date written: 05/06/2025
 Purpose: Part 1 Java Script project
 **********************************************************************/
console.log("Running index.js");
/*********************************************************************** 
 Varibles (Going top to bottom in order introduced)
***********************************************************************/
//Users name
let userName;
//If the user would like to rent a car
let userChoice;
//Users choice of how many seats
let userSeats;
//Choice of car Array
let carArray = ["Walk", "BAC Mono", "Mazda MX5", "Toyota Yaris", "Mini Cooper", "KIA Sportage", "Mitsubishi Triton", "Mitsubishi Outlander", "KIA Carnival"];
//Users choice of car
let choice;
//Users choice of how many days they want to rent a car
let userDays;
//The cost of how many days in a certain car
let answer;
var ten = 10;
/***********************************************************************
 Main code
***********************************************************************/
/* 
<div class="w3-container">
    <h1>Java script button</h1>
    <button class="w3 button" type="button" onclick="start();">START</button>
  </div>
*/
/***********************************************************************
 Functions
***********************************************************************/
function start() {
    //Asking the user for their name
    userName = prompt("Hello my name is Rob.\nWhats yours?");
    alert("Nice to meet you " + userName + " and welcome to Rob's car rentals");
    //Asking the user if they would like to rent a car
    userChoice = prompt("Would you be interested in renting one of our cars " + userName + "?");
    if (userChoice == "yes" || userChoice == "Yes") {
        alert("Well you're in the right place " + userName + ".");
    } else {
        alert("Maybe you should just walk instead.\nThank you for choosing Rob's rentals cars " + userName + "\nWe hope to see you again soon!");
        return;
    }
    //Asking the user how many seats they want in their car
    choice = prompt("So " + userName + "...\nHow many seats would you like inside your car?");
    while (choice < 0 || choice > 8) {
        prompt("Sorry we don't have any cars with " + choice + " seats right now.\nPlease pick a number of seats between 1 and 8.");
    }
    alert("You would like " + choice + " seats in your rental car.\nWe have a " + carArray[choice] + " in stock for you.");
    //Ask the user how many days they would like to rent the car for
    userDays = prompt("How many days would you like to rent our " + carArray[choice] + " for " + userName + "?");
    alert(userDays + " days sounds like a great amount of time to enjoy your travels " + userName + "!");
    //Telling the user how much it will cost to rent the car, based on how many days they would like it
    answer = Number(userSeats) * Number(userDays) * ten;
    alert("Renting our " + carArray[choice] + " will cost you " + answer + " dollars.");
    //Giving the user a summary 
    alert("You are renting a " + carArray[choice] + " for " + userDays + " days.\nThe total cost of your rental car will be " + answer + " dollars.");
    alert("Thank you for choosing Rob's rental cars " + userName + "!\nWe look foward to seeing you again soon!");
}
    /*
    userDaysCost = userSeats * userDays * 10;
    alert("Renting our " + carArray[choice] + " will cost you " + userDaysCost + " dollars.");
    */