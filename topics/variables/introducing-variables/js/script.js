/**
 * Introducing variables
 * Justine Cormier (but really, Pippin Barr)
 * 
 * Learning what a variable is and does
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * Draws a circle in the center of the canvas
*/
function draw() {
    background(0);
    
    //draw the circle
    push();
    //where you mouse is on the board
    fill(mouseX, mouseY, 0);
    noStroke();
    //circle stays in the center ALWAYS
    ellipse(width / 2, height / 2, mouseX, mouseY);
    //ellipse is under the cursor
    //if you want the mouse to only run on one axis, do ex. 200 mouseY
    ellipse(mouseX, mouseY, 200, 200);
    pop();
    
}