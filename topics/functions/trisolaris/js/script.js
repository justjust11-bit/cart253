/**
 * Trisolaris
 * Pippin
 * 
 * Draws the three suns of Trisolaris. Poorly.
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

    // drawSun1(); below are the "arguments"
    //the x, y, size match up to this one below SOLELY because of the order of the numbers,
    drawSun(500, 100, 80);
    // drawSun2();
    drawSun(350, 180, 200);
    // drawSun3();
    drawSun(120, 100, 160);
    //now you can easily add something that looks exactly the same witrh the same function
}

//the words in the brackets are basically variables
//the words in the brackets are CALLED parameters
function drawSun(x, y, size) {
    push();
    noStroke();
    fill("#f99736");
    ellipse(x, y, size);
    pop();

}


// /**
//  * Draws the first sun
//  */
// function drawSun1() {
//     push();
//     noStroke();
//     fill("#f99736");
//     ellipse(500, 100, 80);
//     pop();
// }

// /**
//  * Draws the second sun
//  */
// function drawSun2() {
//     push();
//     noStroke();
//     fill("#f99736");
//     ellipse(350, 180, 200);
//     pop();
// }

// /**
//  * Draws the third sun
//  */
// function drawSun3() {
//     push();
//     noStroke();
//     fill("#f99736");
//     ellipse(120, 100, 160);
//     pop();
// }