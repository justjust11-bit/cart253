/**
 * Buzzy the parameter
 * Pippin Barr
 * 
 * A fly that buzzes around on the canvas
 */

"use strict";

// Our fly that will buzz around
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 30,
    //how much it moves on the canvas
    buzziness: 4
};

let jazzyTheFly = {
    x: 300,
    y: 250,
    size: 10,
    //how much it moves on the canvas
    buzziness: 10
};

/**
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");


    //JAZZY AND BUZZY HAVE THE SAME FUNCTION, BUT THEIR DATA
    //(SIZE, PLACEMENT, BUZZINESS, ETC), IS DIFFERENT, as
    //written on the top in variables
    // Move buzzy
    moveFly(buzzyTheFly);
    moveFly(jazzyTheFly);


    // Draw buzzy
    drawFly(buzzyTheFly);
    drawFly(jazzyTheFly);
}

/**
 * moves buzzy
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/** draws buzzy
 */

function drawFly(fly) {
    //uses the properties of the fly that was given in move
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}