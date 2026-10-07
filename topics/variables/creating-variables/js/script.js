/**
 * Creating variables
 * Justine Cormier (Pippin Barr)
 * 
 * Experimenting with creating variables
 */

"use strict";

//variables
let cheeseRed = 255;
let cheeseGreen = 255; 
let cheeseBlue = 0;

let holeSize = 120;
let holeShade = 0
let holeX = 130
let holeY = 160


/**
 * Creates the canvas
*/
function setup() {
    createCanvas(480, 480);
}


/**
 * draws a hole in a piece of cheese
*/
function draw() {
    //the cheese
    background(cheeseRed, cheeseGreen, cheeseBlue);
    
    // the hole
    push();
    noStroke();
    fill(holeShade);
    ellipse(holeX, holeY, holeSize);
    pop();
}