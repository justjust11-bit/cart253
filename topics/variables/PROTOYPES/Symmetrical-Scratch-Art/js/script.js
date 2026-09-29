/**
 * Symmetrical Scratch Art
 * Justine Cormier
 * 
 * Create your own digital scratch art...Or cover the screen as 
 * much as possible! Using all the different colours that appear 
 * from each corner of the canvas, you will make a work of art. 
 * 100% satisfaction guaranteed. No refunds.
 */


// I used these as a reference for my work: 
// https://p5js.org/reference/p5/pmouseX/
//https://p5js.org/examples/Repetition-Kaleidoscope/


"use strict";


let brushSize = 100
let maxColor = 255
let half = 2
let textPosition = {
    x: 20,
    y: 50,
    size: 30
}

let start = 0


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
    drawText();
}

/**
 * draws the ability to paint
 */
function drawPainting() {

    //make the colours match to the map red, green, blue 
    const r = map(mouseX, start, width, start, maxColor);
    const g = map(mouseY, start, height, start, maxColor);
    const b = map(mouseY, start, height, start, maxColor);

    //makes it so when you click, all line start from the middle
    if (mouseIsPressed) {
        //the lines
        const startX = pmouseX - width / half;
        const startY = pmouseY - height / half;
        const endX = mouseX - width / half;
        const endY = mouseY - height / half;

        push();
        translate(width / half, height / half);
        stroke(r, g, b);
        strokeWeight(brushSize);
        //first line, the one you actually see
        line(startX, startY, endX, endY);
        line(-startX, startY, -endX, endY);
        line(startX, -startY, endX, -endY);
        line(-startX, -startY, -endX, -endY);
        pop();
    }
}

/**
 * draws the text
 */
function drawText() {

    // writes the text at the top 
    push();
    fill("#ebffef");
    textAlign(LEFT);
    textStyle(NORMAL);
    textSize(textPosition.size);
    text("Draw yourself a masterpiece", textPosition.x, textPosition.y);
    pop();
}