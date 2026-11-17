/**
 * Gradient
 * Author Name
 * 
 * draws a gradient out of lines
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 300);

}


/**
 * draws a gradient
*/
function draw() {
    background("brown")



    let y = 100;
    // randomSeed(0)
    gradient(color("#ed3d5a"), color("#fff700"))




    for (let x = 0; x <= width; x += 1) {

        const shade = map(x, 0, width, 0, 255)
        // const opacity = map(x, 0, width, 0, 255)


        push();
        stroke(shade)
        line(x, y, x, height);
        pop();

        y += random(0, 1)

    }
}


/**
 * COLOR GRADIENT
 */
function gradient(color1, color2) {



    for (let x = 0; x <= width; x += 1) {

        lerp(0, 10, 0.7)
        const t = map(x, 0, width, 0, 1)
        const color = lerpColor(color1, color2, t)
        push();
        stroke(color)
        strokeWeight(5)
        line(x, 0, x, height);
        pop();
    }
}