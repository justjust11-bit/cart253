/**
 * Trisolaris Returns (get it?)
 * Pippin
 * 
 * Draws the three suns of Trisolaris. Calculate their colour
 * based on their parameters.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(600, 400);
}

/**
 * Draw the three suns
 */
function draw() {
    // Sky blue
    background("#87ceeb");

    drawSun(500, 100, 80);
    drawSun(350, 180, 200);
    drawSun(120, 100, 160);
}

/**
 * Draws a Trisolarian sun
 */
function drawSun(x, y, size) {
    //instead of having the whole calculation in draw sun,
    //have a function for it, and assign the variable here
    let weight = calculateStrokeWeight(x, y);

    push();
    strokeWeight(weight);
    stroke("#ffff00");
    fill("#f99736");
    ellipse(x, y, size);
    pop();
}

/** make a function solely for calculatings
 * 
 */
//needs x, y parameters to calculate the distance
function calculateStrokeWeight(x, y) {

    // Calculate the stroke weight of the sun based on
    // the distance of the mouse position
    //smallest stroke possible
    const minWeight = 1;
    //biggest stroke possible
    const maxWeight = 20;
    let d = dist(mouseX, mouseY, x, y);
    //the maxiumum weight is at 0, when it touches, and the width
    // of the map is the min
    let result = map(d, 0, width, maxWeight, minWeight);

    return result;
    //return sends a value out of a function to the code that 
    // called it. It also ends that function.
    //so that is has this one use

}