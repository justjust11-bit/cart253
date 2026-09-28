/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */


// i used these as a reference for my work: 
// https://p5js.org/reference/p5/pmouseX/
//https://p5js.org/examples/Repetition-Kaleidoscope/
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

    drawPainting();
}

/**
 * draws the ability to paint
 */
function drawPainting() {

    //make the colours match to the map
    const r = map(mouseX, 0, width, 0, 255);
    const g = map(mouseY, 0, height, 0, 255);
    const b = map(mouseY, 0, height, 0, 255);

    if (mouseIsPressed) {
        const startX = pmouseX - width / 2;
        const startY = pmouseY - height / 2;
        const endX = mouseX - width / 2;
        const endY = mouseY - height / 2;

        push();
        translate(width / 2, height / 2);
        stroke(r, g, b);
        strokeWeight(20);
        //first line, the one you actually
        line(startX, startY, endX, endY);
        line(-startX, startY, -endX, endY);
        line(startX, -startY, endX, -endY);
        line(-startX, -startY, -endX, -endY);
        pop();
    }
}