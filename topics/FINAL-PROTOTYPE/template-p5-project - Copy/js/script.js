/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//guessing time for each color is 3 seconds
let guessingTime = 3 * 1000



let bkg =
{
    default: "grey",
    pink: "pink",
    blue: "blue",
    green: "green"
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000)
    // setTimeout(bkgChange(), guessingTime)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    drawBeforeGame();
    drawInGame();
}


function drawBeforeGame() {
    background(bkg.default)

}

function drawInGame() {
    bkgChange()
}

function textDisplay() {
    textSize(30)
    text(guessingTime, width / 2, height / 2)
    text()

}

function mouseClicked() {

    bkg.default = bkg.pink

}