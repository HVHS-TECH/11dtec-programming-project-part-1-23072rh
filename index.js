/***********************************************************************
 Name of task: Rob's car rentals
 Name: Reuben Holdsworth
 Date written: 05/06/2025
 Purpose: Part 1 Java Script project
 **********************************************************************/
console.log("Running index.js");
/*********************************************************************** 
 Varibles
***********************************************************************/
//userName variable
let userName;
//userChoice variable
let userChoice;
//userSeats variable
let userSeats;
//carArray
let carArray = ["Walk", "BAC Mono", "Mazda MX5", "Toyota Yaris", "Mini Cooper", "KIA Sportage", "Mitsubishi Triton", "Mitsubishi Outlander", "KIA Carnival"];
//                0         1            2              3              4               5                  6                    7                   8       //
let choice;  
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
    userChoice = prompt("Would you be intristsed in renting on of our cars " + userName + "?");
    if (userChoice == "yes") {
        alert("Well your in the right place " + userName + ".");
    } else {
        alert("Maybe you should just walk instead.\nThank you for choosing Rob's rentals cars " + userName + "\nWe hope to see you again soon!");
        return;
    }
    //Asking the user how many seats they want in their car
    userChoice = prompt("So " + userName + "...\nHow many seats would you like inside your car?");
    while (userSeats < 1 || userSeats > 8) {
    
    }
    alert("Your chosen number was " + userChoice + ". \nYou think " + carArray[UserChoice]);






/**
 //If the user would like one seat in their car
    if (userSeats == 1) {
        alert("You want one seat in your car, we have a BAC mono in stock just for you.");
    }
    //If the user would like two seats in their car
    if (userSeats == 2) {
        alert("You want two seats in your car, we have a Maxda MX5 in stock just for you.");
    }
    //If the user would like three seats in their car
    if (userSeats == 3) {
        alert("You want three seats in your car, we have a Toyota Yaris in stock just for you.");
    }
    //If the user would like four seats in their car
    if (userSeats == 4) {
        alert("You want four seats in your car, we have a Mini Cooper in stock just for you.");
    }
    //If the user would like five seats in their car
    if (userSeats == 5) {
        alert("You want five seats in your car, we have a KIA Sportage in stock just for you.");
    }
    //If the user would like six seats in their car
    if (userSeats == 6) {
        alert("You want six seats in your car, we have a Mitsubishi Triton in stock just for you.");
    }
    //If the user would like seven seats in their car
    if (userSeats == 7) {
        alert("You want seven seats in your car, we have a Mitsubishi Outlander in stock just for you.");
    }
    //If the user would like eight seats in their car
    if (userSeats == 8) {
        alert("You want eight or more seats in your car, we have a KIA Carnival in stock just for you.");
    }
 */
  
}
