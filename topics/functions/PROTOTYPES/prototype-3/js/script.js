/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let player = {
    x: 400,
    y: 400,
    w: 100,
    h: 100,
    roundness: 0
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 800)
    background("#5d49c1")
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    drawPlayer();
}

/**
 * draws the player
 */
function drawPlayer() {
    push();
    noStroke();
    fill("#181818")
    rect(player.x, player.y, player.w, player.h, player.roundness)
    pop();
}