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
//userSeats variable
let userSeats;
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
    //Asking the user how many seats they want in their car
    userSeats = prompt("So " + userName + "...\nHow many seats would you like inside your car?");
    while (userSeats < 1 || userSeats > 7) {
        userSeats = prompt("Sorry " + userName + " we don't have any cars in stock with " + userSeats + " seats.\nPlease pick a number of seats between...\n 1 - 8");
    }
    alert(userSeats + " seats is a good choice " + userName + "!");
    //If the user would like one seat in their car
    if (userSeats == 1) {
        prompt("You want one seat in your car, we have a BAC mono in stock just for you.");
    }
    //If the user would like two seats in their car
    if (userSeats == 2) {
        prompt("You want two seats in your car, we have a Maxda MX5 in stock just for you.");
    }
    //If the user would like three seats in their car
    if (userSeats == 3) {
        prompt("You want three seats in your car, we have a Toyota Yaris in stock just for you.");
    }
    //If the user would like four seats in their car
    if (userSeats == 4) {
        prompt("You want four seats in your car, we have a Mini Cooper in stock just for you.");
    }
    //If the user would like five seats in their car
    if (userSeats == 5) {
        prompt("You want five seats in your car, we have a KIA Sportage in stock just for you.");
    }
    //If the user would like six seats in their car
    if (userSeats == 6) {
        prompt("You want six seats in your car, we have a Mitsubishi Triton in stock just for you.");
    }
    //If the user would like seven seats in their car
    if (userSeats == 7) {
        prompt("You want seven seats in your car, we have a Mitsubishi Outlander in stock just for you.");
    }
    //If the user would like eight seats in their car
    if (userSeats == 8) {
        prompt("You want eight seats in your car, we have a KIA Carnival in stock just for you.");
    }
}
