/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



let waves = []

let raft = {
    x: 100,
    y: 500,
    w: 200,
    h: 100,
    speed: 1,
    acceleration: undefined
}


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000)

    //if there are less than 12 waves, increase the amount
    for (let i = 0; i < 12; i++) {
        //.push adds the following to the array
        waves.push({
            x: random(0, width),
            y: random(350, height),
            w: random(40, 120),
            h: random(1, 4),
            fill: random(200, 255),
            opacity: random(50, 255),
            speed: -4,
            acceleration: random(-2, -10),
        })

    }
}


/**
 * draws a lake, with waves flowing up, because we are moving forwards (wave go to the left)
*/
function draw() {
    background("#3b409d")
    drawBkg();
    drawWaves();
    moveWaves();
    drawRaft();
    moveRaft();
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
    rect(-20, -50, width + 50, 380)
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


/**
 * moves the waves to the left, and makes them loop
 */
function moveWaves() {

    for (let wave of waves) {
        //acceleration randomizes the speed
        wave.x += wave.speed + wave.acceleration

        // if the wave goes past the width, it comes back from the right
        if (wave.x < 0 - wave.w) {
            wave.x = width + wave.w;
        }
    }
}

/**
 * draws the raft, and the player
 */

function drawRaft() {

    push();
    angleMode(DEGREES)
    rotate(1)
    stroke("#3d1f0c")
    fill("#5e4829")
    rect(raft.x - 3, raft.y, raft.w + 5, raft.h + 20, 20, 20, 10, 10)
    fill("#a78b64")
    rect(raft.x, raft.y, raft.w, raft.h, 20)
    pop();
}

/**
 * moves the raft when you press s or w
 */
function moveRaft() {

    let acceleration = random(2, 6)
    //w
    if (keyCode === 87) {
        raft.y -= raft.speed + acceleration
    }

    //s
    if (keyCode === 83) {
        raft.y += raft.speed + acceleration
    }
    raft.y = constrain(raft.y, 330, height - raft.h - 20)
}