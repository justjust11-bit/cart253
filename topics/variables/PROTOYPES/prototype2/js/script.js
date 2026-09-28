/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */


// i used this as a reference for my work: https://p5js.org/reference/p5/pmouseX/
"use strict";

/**
 * creates canvas
*/
function setup() {
    createCanvas(800, 800);
    background("black");
}


/**
 * draws the canvas
*/
function draw() {
    //make the map colourful behind the black
    const r = map(mouseX, 0, width, 0, 255);
    const g = map(mouseY, 0, height, 0, 255);
    const b = map(mouseY, 0, height, 0, 255);

    if (mouseIsPressed) {
        stroke(r, g, b);
        strokeWeight(10);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}