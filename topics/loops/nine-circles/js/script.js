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


    // SECOND WAY HE SHOWED US, WHERE THE Y IS SIZE*I
    let x = 200
    let size = 20

    //mouse y, starts at the lowest (0), and its heighest is height,
    //0 is lowest target range, 13 highest target range
    //this means the lowest amount of circles is 0, and the highest is 9
    let numCircles = map(mouseY, 0, height, 0, 9)

    for (let i = 0; i < numCircles; i++) {

        let y = size * i

        ellipse(x, y, size)
    }

    //FIRST WAY TO DO IT THAT HE SHOWED US

    //     let numCircles = map(mouseY, 0, height, 0, 9)

    // for (let i = 0; i < numCircles; i++) {
    //     ellipse(x, y, size)
    //     y += size
    // }


    ///below idk if it even works dont use it if you dont have to
    // let x = 200
    // let size = 20
    // let numCircles = 9;

    // let i = 0;
    // while (i < numCircles) {
    //     const y = size * i;
    //     ellipse(x, y, size);
    //     i++;
    // }


    // Draw a series of 50-pixel diameter circles
    // Starting at the top of the canvas
    // And ending at the bottom
    //     ellipse(200, 0, 50);
    // ellipse(200, 50, 50);
    // ellipse(200, 100, 50);
    // ellipse(200, 150, 50);
    // ellipse(200, 200, 50);
    // ellipse(200, 250, 50);
    // ellipse(200, 300, 50);
    // ellipse(200, 350, 50);
    // ellipse(200, 400, 50);
}