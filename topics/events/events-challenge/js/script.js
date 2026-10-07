/**
 * The Only Move Is Not To Play
 * Pippin Barr
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Update the score and display the UI
 */
function draw() {
    background("#87ceeb");

    // Only increase the score if the game is not over
    if (!gameOver) {
        // Score increases relatively slowly
        score += 0.05;
    }
    displayUI();

}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
    if (gameOver) {
        push();
        textSize(48);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("You lose!", width / 2, height / 3);
        pop();
    }
    displayScore();
}

/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(floor(score), width / 2, height / 2);
    pop();
}

/**
 * sets the gameOver variable to true
 */
function lose() {

    gameOver = true;
}

//if you click the mouse you lose

function mouseClicked() {
    lose()
}

//if you long press the mouse you lose
function mousePressed() {
    lose()
}

//if you move your mouse you lose
function mouseMoved() {
    lose()
}

//if you click any key on your keyboard you lose
function keyPressed() {
    lose()
}


//if you drag your mouse you lose
function mouseDragged() {
    lose()
}

//if you use your mousewheel you lose
function mouseWheel() {
    lose()
}