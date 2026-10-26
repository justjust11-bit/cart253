/**
 * Title of Project
 * Justine Cormier
 * 
 * 
 * 
 * refs used: https://editor.p5js.org/pippinbarr/sketches/fD7Ha1Yva
 */

"use strict";

const tileSize = 100

// Dimensions of the "world"
const rows = 10;
const columns = 10;

let player = {
    fill: ("#adacac"),
    x: 350,
    y: 400,
    size: tileSize,
    roundness: 0
}

let hole = {
    fill: ("#181818"),
    x: 400,
    y: 100,
    size: 100
}

// const coin = {
//     // Position and size
//     x: tileSize * 5,
//     y: tileSize * 6,
//     size: tileSize,
//     // Colour
//     fill: "#ebe487",
//     // starts off not having been picked up
//     collected: false,

// };

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(tileSize * columns, tileSize * rows)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#5d49c1")
    drawPlayer();
    drawCircleHole();

    drawCoin(random(0, 800), random(0, 800), 100)
}

/**
 * draws the player
 */
function drawPlayer() {
    push();
    noStroke();
    fill(player.fill);
    rect(player.x, player.y, player.size, player.size, player.roundness);
    pop();
}

/**
 * draws the hole the square wants to get into
 */
function drawCircleHole() {
    push();
    noStroke();
    fill(hole.fill);
    ellipse(hole.x, hole.y, hole.size);
    pop();
}

// /**
//  * moves the player
//  */
// function movePlayer() {
//     keyPressed(up)
//     keyPressed(down)
//     keyPressed(left)
//     keyPressed(right)
// }

/**
 * uses keys (WASD) to move the player
 */
function keyPressed() {

    //if W is pressed, it goes UP
    if (keyCode === 87) {
        player.y -= tileSize
    }
    // S - DOWN
    if (keyCode === 83) {
        player.y += tileSize
    }
    // D - RIGHT
    if (keyCode === 68) {
        player.x += tileSize
    }
    // A - LEFT
    if (keyCode === 65) {
        player.x -= tileSize
    }

}

/**
 * draws the coin
 */
function drawCoin() {

    let randomised =
        push();
    noStroke();
    fill("yellow")
    ellipse(random(0, 800), 100)
    pop();
}