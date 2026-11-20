/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



let waves = []


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000)

    //if there are less than 20 waves, increase the amount
    for (let i = 0; i < 20; i++) {
        //.push adds the following to the array
        waves.push({
            x: random(0, width),
            y: random(270, height),
            w: random(40, 120),
            h: random(1, 5),
            fill: random(200, 255),
            opacity: random(50, 255),
            speed: 1,
            acceleration: random(0, 10),
        })

    }
}


/**
 * draws a lake, with waves flowing down (to the right)
*/
function draw() {
    background("#3b409d")
    drawBkg();
    drawWaves();
    moveWaves();

}

/**
 * draws the "shore", and the sky
 */
function drawBkg() {

    push();

    fill("#4b8198")
    //stroke fill is the shore
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
    //takes the variables from waves and applies it to each individual wave
    //draws the waves
    for (let wave of waves) {
        push();
        stroke(wave.fill, wave.opacity)
        strokeWeight(3)
        fill(wave.fill, wave.opacity)
        angleMode(DEGREES)
        rotate(1)
        ellipse(wave.x, wave.y, wave.w, wave.h)
        pop();
    }

}

function moveWaves() {

    for (let wave of waves) {
        //acceleration randomizes the speed
        wave.x += wave.speed + wave.acceleration

        // if the wave goes past the width, it comes back from the left
        if (wave.x > width + wave.w) {
            wave.x = -wave.w;
        }
    }
}
