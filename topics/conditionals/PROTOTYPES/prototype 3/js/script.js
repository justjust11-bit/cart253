/**
 * Clown 
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let clown = undefined;
let clownHole = 0;

const hole1 = {
    x: 170,
    y: 390,
    size: 150
}

const hole2 = {
    x: 400,
    y: 390,
    size: 150
}

const hole3 = {
    x: 630,
    y: 390,
    size: 150
}




/**
 * draws canvas
*/
async function setup() {
    createCanvas(800, 600)
    clown = await loadImage("./assets/images/clown.png");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#875737")

    drawHoles();

    if (clownHole === 1) {
        imageMode(CENTER);
        image(clown, hole1.x, hole1.y, 100, 100);
    } else if (clownHole === 2) {
        imageMode(CENTER);
        image(clown, hole2.x, hole2.y, 100, 100);
    } else if (clownHole === 3) {
        imageMode(CENTER);
        image(clown, hole3.x, hole3.y, 100, 100);
    }
}

/**
 * draws holes weasels will come out of
 */
function drawHoles() {

    push();
    fill("#2b0a0a")
    //holes from left to right
    ellipse(hole1.x, hole1.y, hole1.size)
    ellipse(hole2.x, hole2.y, hole2.size)
    ellipse(hole3.x, hole3.y, hole3.size)

    pop();

}

function mouseClicked() {
    if (dist(mouseX, mouseY, hole1.x, hole1.y) < hole1.size / 2) {
        clownHole = 1;
    } else if (dist(mouseX, mouseY, hole2.x, hole2.y) < hole2.size / 2) {
        clownHole = 2;
    } else if (dist(mouseX, mouseY, hole3.x, hole3.y) < hole3.size / 2) {
        clownHole = 3;
    }
}
