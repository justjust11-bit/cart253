/**
 * Introducing events
 * Justine Cormier (But really  Pippin Barr)
 * 
 * Taking a look at how events work in JavaScript and p5
 */

"use strict";

/**
 * Creates the canvas, makes the canvas black
*/
function setup() {
    createCanvas(400, 400);
    background(0)
}


/**
 * Does nothing!
*/
function draw() {

}

//draws the circle at the mouse location
function mousePressed() {
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 50);
    pop();
}
