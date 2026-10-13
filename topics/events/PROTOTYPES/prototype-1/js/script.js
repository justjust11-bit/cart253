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

let drum = {
    size: 200,
    x: 800 / 2,
    y: 800 / 2
}


let clickAmount = 0



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
    clickCounter();
}


/**
 * draws the drum
 */
function drawButton() {
    push();
    fill("#d49b75")
    ellipse(drum.x, drum.y, drum.size)
    pop();
}

function clickCounter() {

    push();
    fill("white")
    textSize(100)
    text(clickAmount, 70, 140)
    pop();
}

function mouseClicked() {
    //if (gameOver){
    //return}
    // Check if the drum was clicked
    const d = dist(mouseX, mouseY, drum.x, drum.y);
    const clicked = (d < drum.size / 2);
    // If so, shrink the bug
    if (clicked) {
        clickAmount += 1
    }
}