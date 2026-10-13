/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//drum hit sfx
let donSFX = undefined;

let gamePlay = true;
let gameOver = false;
let gameWin = false;

//the game lasts 5 seconds
let gameDuration = 5 * 1000;

//background colour
let bg = {
    fill: ("#e0aa3e"),
}

//center of the drum, where you can hit it
let drum = {
    size: 200,
    x: 800 / 2,
    y: 800 / 2
}

//click tally starts at 0
let clickAmount = 0



/**
 *  loads the drum hit sound
 */
async function preload() {
    donSFX = await loadSound("assets/sounds/don.wav");
}



/**
 * creates canvas and sets time for the game
*/
async function setup() {
    createCanvas(800, 800)

    setTimeout(endGame, gameDuration);

    await preload();


}


/**
 * draws the drums, tally in the top left, game over and game win
*/
function draw() {
    background(bg.fill)
    if (gamePlay) {

        //might change later
        drawDrum();
        clickCounter();
    }
    else if (gameOver) {
        drawGameOver();
    }
    else if (gameWin) {
        drawGameWin();
    }
}

/**
 * ends the game, either in game over or game win
 */
function endGame() {
    (gamePlay = false)
    if (clickAmount >= 30) {
        gameWin = true
    }
    else gameOver = true

}


/**
 * draws the drum
 */
function drawDrum() {
    //blue part of the drum
    push();
    strokeWeight(3);
    fill("#45b1bb")
    rect(272, 290, 257, 335, 120)
    pop();

    //white part of the drum
    push();
    strokeWeight(3)
    fill("#f2eaea")
    ellipse(drum.x, drum.y, drum.size + 60)
    pop();

    //hittable spot of the drum
    push();
    strokeWeight(0)
    fill("#d13624")
    ellipse(drum.x, drum.y, drum.size)
    pop();

    //face
    push();
    fill("black")
    ellipse(width / 2 + 60, height / 2 - 10, 50)
    ellipse(width / 2 - 60, height / 2 - 10, 50)
    pop();

    //mouth

    push();
    translate(width / 2, height / 2 + 45); // mouth position
    rotate(HALF_PI);                       // 90 degrees

    noFill();
    stroke("black");
    strokeWeight(7);
    //right lip
    bezier(-5, -50, 25, -50, 40, 0, 0, 0);
    //left lip
    bezier(0, 0, 25, 0, 40, 45, -3, 50);

    pop();


}

/**counter at the top right, showcasing the amount of clicks you've
 * done since the game started
*/
function clickCounter() {

    push();
    fill("white")
    textSize(100)
    text(clickAmount, 120, 230)
    pop();

    push();
    fill("white");
    textSize(50);
    text("Drum hits:", 50, 100);
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
            donSFX.play();
            clickAmount += 1
        }
    }
}

/**
 * draws the gameOver screen
 */

function drawGameOver() {
    drawDrum();
    if (gameOver === true) {
        push();
        fill("#7b0404")
        textSize(80)
        textStyle(BOLD)
        strokeWeight(6)
        stroke("#3f0606")
        textAlign(CENTER, CENTER)
        text(clickAmount)
        text("NOT FAST ENOUGH.", width / 2, height - 110)
        text(clickAmount, width / 2 - 100, height / 2 - 250)
        text("hits", width / 2 + 80, height / 2 - 250)
        pop();
    }

}

function drawGameWin() {
    drawDrum();
    if (gameWin === true) {
        push();
        fill("#1a721a")
        textStyle(BOLD)
        textSize(100)
        strokeWeight(5)
        stroke("#073511")
        textAlign(CENTER, CENTER)
        text("YAAAAAAYYY", width / 2, height - 110)
        text(clickAmount, width / 2 - 100, height / 2 - 250)
        text("hits!", width / 2 + 80, height / 2 - 250)
        pop();

    }

}