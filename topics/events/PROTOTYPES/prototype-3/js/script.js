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

//the song exerpt is 19 seconds, so ill leave an extra second for the song to end
let gameDuration = 20 * 1000;

let song = undefined;


//button at the bottom 
let touchPad = {
    x: 1080 / 2,
    y: 650,
    size: 150
}

//moving button
let tapNote = {
    x: 1080 / 2,
    y: -10,
    size: 150
}

//so the tap note can disappear after being pressed on time
let tapNoteDisappear = false;


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

/**
 * draws the tap notes... they will also disappear once you click at the right time
 */
function drawTapNotes() {
    if (!tapNoteDisappear) {
        push();
        stroke("#5d3b3b");
        strokeWeight(5);
        fill("pink");
        ellipse(tapNote.x, tapNote.y, tapNote.size);
        pop();
    }

}

/**
 * moves the tap notes from up to down onto the 
 */
function moveTapNotes() {
    if (gamePlay === true) {
        tapNote.y += 3
    }

    // Calculate distance between tapnote and touch pad
    const d = dist(tapNote.x, tapNote.y, touchPad.x, touchPad.y);
    const onTop = (d < tapNote.size / 2 + touchPad.size / 2);

    //&& tapped.keyCode === 40
    if (onTop) {
        tapNoteDisappear = true;
    }


}

/**
 * ends the game after 19 seconds
 */
function endGame() {
    (!gamePlay);
    endScreen = true
    drawEndScreen();

}


/**
 * draws the end screen
 */
function drawEndScreen() {

    push();
    fill("#000000")
    text("GG", width / 2, height / 2);
    text(clickAmount, width / 2, height / 2);
    pop();
}




