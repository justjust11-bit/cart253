/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


//gameOver = false;


let bg = {

    fill: ("#000000"),
    fills: {
        blue: "#226083",
        red: "#914343"

    }
}


/**
 * creates canvas
*/
function setup() {
    createCanvas(800, 800)

}


/**
 * draws
*/
function draw() {
    background(bg.fill)

    //might change later
    drawButton();
}