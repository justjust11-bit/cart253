/**
 * STAR FIELD
 * Author Name
 * 
 * DRAWS A star field with a for loop
 */

"use strict";

const numStars = 200;


/**
 * create a canvas
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("black")

    randomSeed(1)
    for (let i = 0; i < numStars; i++) {
        drawStar();
    }


}

/**
 * draws a random star
 */
function drawStar() {

    const x = random(0, width)
    const y = random(0, height)
    const size = random(1, 5);

    push();
    noStroke();
    fill("White")
    ellipse(x, y, size)
    pop();

    push();
    ellipse(mouseX, mouseY, 50)
    pop();

}