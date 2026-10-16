/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * refs used: https://p5js.org/reference/p5/deltaTime/
 */

"use strict";

//
let gamePlay = false;
let titleScreen = true;
let endScreen = false;

//the song exerpt is 19 seconds, so ill leave an extra second for the song to end
let gameDuration = 29 * 1000;

let song = undefined;

const beatDuration = 1500; // 2 seconds milliseconds
const timeOnScreen = 1000; // how you can change the rythm

//button at the bottom, that will receive the notes 
let touchPad = {
    x: 1080 / 2,
    y: 650,
    size: 150
}

//moving button, that represents the "notes"
let tapNote = {
    x: 1080 / 2,
    //the y will change because the note will move the y axis only
    y: undefined,
    //where the y starts off
    yInitial: -10,
    size: 150,
    timer: beatDuration //  countdown for each beat (time between the notes)
}

//so the tap note can disappear 
let tapNoteDisappear = false;


/**
 * loads the song
 */

async function preload() {
    song = await loadSound("assets/sounds/laserbeam.mp3");
}


/**
 * creates canvas, sets time of game until game end screen
*/
async function setup() {
    createCanvas(1080, 800);
    await preload();
}


/**
 * draws
*/
function draw() {
    background("brown");

    if (titleScreen) {
        drawTitleScreen();
    }
    else if (gamePlay) {
        drawTouchPad();
        moveTapNotes();
        drawTapNotes();
    }
    else if (endScreen) {
        drawEndScreen();
    }
}


/**
 * draws the touch pad at the bottom center
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
 * draws the tap notes... they go down the y axis
 */
function drawTapNotes() {
    //i put this conditional at the top to be able to make the note disappear
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
 * moves the tap notes from up to down in a rythmic fashion... 
 */
function moveTapNotes() {

    // I received help from someone knowledgeable in math to help me solve the math equation necessary
    //for the beat/rythmic loop to happen.... We used deltaTime, which is the amount of time it took the p5 draw()
    //to execute the previous frame
    tapNote.y = tapNote.timer * (tapNote.yInitial - touchPad.y) / timeOnScreen + touchPad.y
    tapNote.timer -= deltaTime

    // check whether its been more than half a second since the note passed the touchPad
    if (tapNote.timer < (timeOnScreen - beatDuration)) {
        //to remove the delay caused by the tapnote coming off of the screen before it respawns
        let delay = beatDuration - timeOnScreen + tapNote.timer
        tapNote.timer = timeOnScreen - delay
    }

    // // this is for debug purposes
    // push()
    // textSize(30)
    // text(tapNote.timer, width / 4, height / 4)
    // pop()

}


function drawTitleScreen() {
    push();
    background("#e8b9d2")
    textAlign(CENTER, CENTER);
    textSize(60);
    textFont('Verdana')
    text("Rythm game", width / 2, height / 2 - 80);
    textSize(30);
    text("Press SPACE to start", width / 2, height / 2 + 55);
    pop();
}

function keyPressed(event) {
    if (event.keyCode === 32 && titleScreen) {
        titleScreen = false;
        gamePlay = true;
        song.play();
        setTimeout(endGame, gameDuration);
    }
}
/**
 * ends the game after 19 seconds
 */
function endGame() {
    gamePlay = false;
    titleScreen = false;
    endScreen = true
    if (song.isPlaying()) {
        song.stop();
    }

}


/**
 * draws the end screen
 */
function drawEndScreen() {

    push();
    fill("#000000")
    textAlign(CENTER, CENTER);
    textSize(48);
    text("GG", width / 2, height / 2);
    pop();
}



