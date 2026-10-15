/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//
let gamePlay = true;

//the song exerpt is 19 seconds
let gameDuration = 19 * 1000;

let song = undefined;



let touchPad = {
    x: 1080 / 2,
    y: 650,
    size: 150
}

let tapNote = {
    x: 1080 / 2,
    y: -10,
    size: 150
}


/**
 * loads the song
 */

async function preload() {
    song = await loadSound("assets/sounds/turn-it-into-love.mp3");
}


/**
 * creates canvas
*/
async function setup() {
    createCanvas(1080, 800);

    setTimeout(endGame, gameDuration)
}


/**
 * draws
*/
function draw() {
    background("brown");

    drawTouchPad();
    //JUSTINE!!!! MAYBE YOU CAN ADD LONG NOTES!!
    drawTapNotes();

    //moves the tap notes
    moveTapNotes();

}


/**
 * draws the touch pad
 */
function drawTouchPad() {

    push();
    stroke("#461f1f");
    strokeWeight(5);
    fill("grey");
    ellipse(touchPad.x, touchPad.y, touchPad.size);
    pop();
}

function drawTapNotes() {
    push();
    stroke("#5d3b3b");
    strokeWeight(5);
    fill("pink");
    ellipse(tapNote.x, tapNote.y, tapNote.size);
    pop();

}

function moveTapNotes() {
    if (gamePlay === true) { tapNote.y += 4 }

}

function endGame() {
    (!gamePlay);
    endScreen = true
    drawEndScreen();

}

function drawEndScreen() {

    push();
    fill("#000000")
    text("GG", width / 2, height / 2);
    text(clickAmount, width / 2, height / 2);
    pop();
}

