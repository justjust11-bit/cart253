/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



let wave = {
    x: undefined,
    y: undefined,
    h: undefined,
    w: undefined,
    fill: undefined,
    speed: 1,
    acceleration: undefined
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000)

    wave.x = random(0, width)
    wave.y = random(300, height)
    wave.h = random(1, 5)
    wave.w = random(50, 100)
    wave.fill = random(100, 255)
    wave.opacity = random(0, 255)
    wave.acceleration = random(0, 10)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#3b409d")
    drawBkg();
    drawWaves();
    moveWaves();




}

function drawBkg() {

    push();

    fill("#4b8198")
    stroke("#3f250a")
    strokeWeight(20)
    angleMode(DEGREES)
    rotate(1)
    rect(-20, -50, width + 50, 300)
    pop();
}

/**
 * draws the white lines that look like waves
 * the lines are actually ellipses, because its easier to work with than lines
 */
function drawWaves() {



    push();
    stroke(wave.fill, wave.opacity)
    strokeWeight(3)
    angleMode(DEGREES)
    rotate(4)
    ellipse(wave.x, wave.y, wave.w, wave.h)
    // line(wave.x, wave.y, wave.x2, wave.y2)
    pop();

}

function moveWaves() {


    wave.x += wave.speed + wave.acceleration

    // if the wave goes past the width, it comes back from the left
}
if (wave.x > width + wave.w) {
    wave.x = -wave.w;
}
