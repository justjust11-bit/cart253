/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


//array for the waves/current
let waves = []

//array for the lilypads
let lilypads = []

let raft = undefined;

let collided = false



/**
 * sets the canvas, and the wave and lilypads arrays
*/
function setup() {
    createCanvas(1000, 1000)

    //creates the raft
    raft = createRaft(100, 500, 200, 100, 1)

    //creates the waves
    //if there are less than 12 waves, keep adding more...
    for (let i = 0; i < 12; i++)
        //.push adds the following to the array
        waves.push(createWave());

    //creates the lilypads
    //if there are less than 3 lilypads, increase the amount
    for (let i = 0; i < 3; i++) {
        //increase the amount of lilypads
        lilypads.push(createLilypad());
    }

}

function createRaft(x, y, w, h, speed) {
    let raft = {
        x: x,
        y: y,
        w: w,
        h: h,
        speed: speed,
    }
    return raft;
}
/**
 * creates the waves variables
 */
function createWave() {
    //WAVES/CURRENT
    const waves = {

        x: random(0, width),
        y: random(350, height),
        w: random(40, 120),
        h: random(1, 4),
        fill: random(200, 255),
        opacity: random(50, 255),
        speed: -4,
        acceleration: random(-2, -10),

    }
    return waves; //sends this info to setup
}
/**
 * creates the lilypad variables
 */
function createLilypad() {
    //LILYPADS

    const lilies = {
        x: random(0, width),
        y: random(370, height),
        w: random(60, 80),
        h: random(55, 80),
        fill: "#063b12",
        speed: -4,
        acceleration: random(-2, -8),
        //the cut of the lilypad (pacman)
        cutAngle: random(0, 360)
    }
    return lilies;
}
/**
 * draws a lake, with waves flowing up, because we are moving forwards (wave go to the left)
*/
function draw() {
    background("#3b409d")
    drawBkg();

    drawWaves();
    moveWaves();

    drawLilypads();
    moveLilypads();

    drawRaft();
    moveRaft();

    checkCollision();

    displayLoss();


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
            //when the waves leave the canvas, their y,w,and h get re randomized
            wave.x = random(0, width);
            wave.y = random(350, height);
            wave.w = random(40, 120);
            wave.h = random(1, 4);
            wave.fill = random(200, 255);
            wave.opacity = random(50, 255);
            wave.x = width + wave.w;
        }
    }
}
/**
 * draws the lilypads
 */
function drawLilypads() {
    //takes the variables from lilypads and applies it to each individual lilypad
    //draws the lilypads
    for (let lilypad of lilypads) {
        push();
        stroke(lilypad.fill)
        strokeWeight(3)
        fill(lilypad.fill)
        angleMode(DEGREES)
        rotate(1)
        // ellipse(lilypad.x, lilypad.y, lilypad.w, lilypad.h)
        arc(lilypad.x, lilypad.y, lilypad.w, lilypad.h, lilypad.cutAngle, lilypad.cutAngle + 330, PIE);
        pop();
    }

}
/**
 * moves the lilypads to the left, and makes them loop
 */
function moveLilypads() {

    for (let lilypad of lilypads) {
        //makes all lilypads move, some faster than others ( because of random acceleration)
        lilypad.x += lilypad.speed + lilypad.acceleration;

        if (lilypad.x < 0 - lilypad.w) {
            //when the lilypads leave the canvas, their y,w,and h gets re randomized
            lilypad.y = random(370, height);
            lilypad.w = random(60, 80);
            lilypad.h = random(55, 80);
            //respawn them all at the same x, outside of the canvas
            lilypad.x = width + lilypad.w;
        }
    }
}
/**
 * draws the raft, and the player (for now, snowman)
 */

function drawRaft() {

    push();
    angleMode(DEGREES)
    rotate(1)
    stroke("#3d1f0c")
    fill("#553b1e")
    rect(raft.x - 3, raft.y, raft.w + 5, raft.h + 20, 20, 20, 10, 10)
    fill("#977c56")
    rect(raft.x, raft.y, raft.w, raft.h, 20)
    fill("#dbd3d3")
    pop();

    push();
    //snowman
    stroke("#8ea8c0")
    //bottom ball
    ellipse(raft.x + 100, raft.y + 20, raft.w - 100, raft.h, 20)
    //middle ball
    ellipse(raft.x + 100, raft.y - 30, raft.w - 120, raft.h - 20, 20)
    //top ball
    ellipse(raft.x + 100, raft.y - 70, raft.w - 140, raft.h - 40, 20)

    //eyes
    fill("black")
    ellipse(raft.x + 90, raft.y - 80, raft.w - 190, raft.h - 90, 20)
    ellipse(raft.x + 120, raft.y - 80, raft.w - 190, raft.h - 90, 20)
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
/**
 * checks if the lilypads collided with the player raft
 */
function checkCollision() {
    const raftFrontX = raft.x + raft.w;
    const raftFrontY = raft.y + raft.h / 2;

    for (let lilypad of lilypads) {
        const d = dist(raftFrontX, raftFrontY, lilypad.x, lilypad.y)

        if (d < raft.h / 2 + lilypad.w / 2) {
            collided = true
        }
    };

}

function displayLoss() {
    if (collided === true) {
        textSize(50)
        text("You lost BOOOOOO", width / 2, height / 2)
        raft.x -= 4
    }
}