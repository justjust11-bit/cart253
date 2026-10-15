/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



//the song exerpt is 19 seconds
let gameDuration = 19 * 1000;



/**
 * creates canvas
*/
function setup() {
    createCanvas(1080, 800)
}


/**
 * draws
*/
function draw() {
    background("brown")

    drawTouchPad();

}


/**
 * draws the touch pad
 */
function drawTouchPad() {

    push();
    stroke("#461f1f")
    strokeWeight(5)
    fill("grey")
    ellipse(width / 2, 650, 150)
    pop();
}

