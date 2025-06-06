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
        userSeats = prompt("Sorry " + userName + " we don't have any cars in stock with " + userSeats + " seats.\nPlease pick a number of seats between...\n 1 - 7");
    }
    alert(userSeats + " seats is a good choice " + userName + "!");
    //If the user would like one seat in their car

    //If the user would like two seats in their car

    //If the user would like three seats in their car

    //If the user would like four seats in their car

    //If the user would like five seats in their car

    //If the user would like on seat in their car

    //If the user would like on seat in their car

}
