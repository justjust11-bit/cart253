/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(150);
    
    push();
    fill(255, 0, 0);
    stroke(255);
    ellipse(320, 320, 480)
    pop();
    
    
    push();
    fill("white");
    noStroke();
    ellipse(320, 320, 140, 140);
    pop();
    
    push();
    fill("#000000");
    noStroke();
    ellipse(320, 320, 20, 20);
    pop();
    
    
}