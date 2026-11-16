/**
 * Vertical circles
 * Pippin Barr
 * 
 * Draws a series of circles from the top to the bottom of the canvas.
 * Arguably not in the most efficient way.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw circles from the top to the bottom of the canvas
 */
function draw() {
    background(0);
    const userMouse = constrain(mouseX, 20, 400)


    let x = 200;
    let y = 0;
    let size = map(userMouse, 0, width, 2, 100)


    // randomSeed(2)
    while (y <= height) {
        ellipse(x, y, size);
        y += size;
        x += random(-2, 2);
        ellipse(x + 100, y, size);
        y -= size;
        x -= random(-2, 2);
        ellipse(x - 100, y, size);
        y += size;
        x += random(-2, 2);
    }
}


// Draw a series of 50-pixel diameter circles
// Starting at the top of the canvas
// And ending at the bottom


//     ellipse(x, y, size);
//     y += size;

//     ellipse(x, y, size);
//     y += size;

//     ellipse(x, y, size);
//     y += size;

//     ellipse(x, y, size);
//     y += size;

//     ellipse(x, y, size);
//     y += size;

//     ellipse(x, y, size);
//     y += size;

//     ellipse(x, y, size);
//     y += size;

//     ellipse(x, y, size);
//     y += size;

//     ellipse(x, y, size);
// }