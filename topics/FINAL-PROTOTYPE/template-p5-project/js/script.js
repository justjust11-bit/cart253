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
    x2: 270,
    y2: 505,
    fill: (250, 255),
    speed: 1,
    acceleration: 2

}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000)
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

function drawWaves() {

    let x = random(200,)

    push();
    stroke(wave.fill)
    strokeWeight(10)
    line(wave.x, wave.y, wave.x2, wave.y2)
    pop();
}

function moveWaves() {

    wave.x2 += wave.speed;
    wave.x += wave.speed
}
