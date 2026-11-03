/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");


    let x = 0;
    let y = 0;
    let strokeColor = 0;
    let lineThick = 0;
    let strokeColor2 = 0;
    let lineThick2 = 0;

    for (let a = 0; a <= height; a += 2) {
        push();
        let strokeColor4 = map(a, 0, height, 0, 100);
        stroke(strokeColor4);
        line(width, a, 0, a);
        pop();
    }
    while (x <= width) {
        push();
        stroke(strokeColor)
        strokeWeight(lineThick);
        line(x, 0, x, height);
        x += 50;
        strokeColor += 25;
        lineThick += 3;
        pop();
    }
    while (y <= height) {
        push();
        stroke(strokeColor2);
        strokeWeight(lineThick2);
        line(width, y, 0, y);
        y += 50;
        strokeColor2 += 25;
        lineThick2 += 3;
        pop();
    }

}
