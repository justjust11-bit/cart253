/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


gamePlay = true


let bg = {

    fill: ("#000000"),
    fills: {
        blue: "#226083",
        red: "#914343"

    }
}

let drum = {
    size: 200,
    x: 800 / 2,
    y: 800 / 2
}


let clickAmount = 0



/**
 * creates canvas
*/
function setup() {
    createCanvas(800, 800)
    setTimeout(endGame, gameDuration);
}


/**
 * draws
*/
function draw() {
    background(bg.fill)
    if (gamePlay) {

        //might change later
        drawButton();
        clickCounter();
    }
    drawGameOver();
}

/**
 * ends the game, either in game over or game win
 */
function endGame() {

    if (clickAmount >= 30) {
        gameOver = true
    }
    else gameWin = true

}


/**
 * draws the drum
 */
function drawButton() {
    push();
    fill("#d4ac75")
    ellipse(drum.x, drum.y, drum.size)
    pop();
}

/**counter at the top right, showcasing the amount of clicks you've
 * done since the game started
*/
function clickCounter() {

    push();
    fill("white")
    textSize(100)
    text(clickAmount, 70, 140)
    pop();
}

/**
 * clicking the drum will make the click counter go up
 */

function mouseClicked() {
    if (gamePlay) {

        // Check if the drum was clicked
        const d = dist(mouseX, mouseY, drum.x, drum.y);
        const clicked = (d < drum.size / 2);
        // If so, shrink the bug
        if (clicked) {
            clickAmount += 1
        }
    }
}

/**
 * draws the gameOver screen
 */

function drawGameOver() {
    push();
    text(clickAmount)
    text("NOT FAST ENOUGH.")
    pop();

}