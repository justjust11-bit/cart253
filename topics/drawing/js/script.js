/**
 * Big red record
 * Justine Cormier
 * 
 * Displays a big red record
 */

"use strict";

/**
 * Creates a square cancas
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * Displays the record
*/
function draw() {
    //grey background
    background(150);
    
    //main part of the record
    push();
    fill(255, 0, 0);
    stroke(255);
    ellipse(320, 320, 480)
    pop();
    
    //label on the record
    push();
    fill("white");
    noStroke();
    ellipse(320, 320, 140);
    pop();
    
    //hole of the record
    push();
    fill("#000000");
    noStroke();
    ellipse(320, 320, 20);
    pop();
    
    
}