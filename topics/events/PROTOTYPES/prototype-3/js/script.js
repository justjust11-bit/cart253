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

//the amount of seconds, the bpm, the 4/4, and *1000 for milliseconds
const beatDuration = 60 / 135 * 4 * 1000;
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

    //the first beat starts in 3/4 instead of 4/4
    timer: 3 / 4 * beatDuration, //  countdown for each beat (time between the notes)
    hit: false,
    fills: {
        neutral: "#b97575",
        perfect: "#c41eed",
        great: "#18b223",
        good: "#0d3b53",
        bad: "#605252",
        miss: "#1c0f0f"
    },
    fill: "#b97575"
}

//so the tap note can disappear 
let tapNoteDisappear = false;
let points = 0;
let tapNoteScored = false;


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
    background("#6a51c4");

    if (titleScreen) {
        drawTitleScreen();
    }
    else if (gamePlay) {
        drawTouchPad();
        moveTapNotes();
        drawTapNotes();
        push();
        fill("#18a786");
        textSize(90);
        textAlign(LEFT, TOP);
        textFont('Verdana')
        textStyle(BOLD)
        text("Points: " + points, 50, 70);
        pop();
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
        fill(tapNote.fill);
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
        tapNote.hit = false;
        tapNote.fill = tapNote.fills.neutral
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
    else if (event.keyCode === 32 && gamePlay && !tapNote.hit) {
        if (tapNote.timer < 20 && tapNote.timer > -20) {
            points += 10
            tapNote.fill = tapNote.fills.perfect
        }

        else if (tapNote.timer < 50 && tapNote.timer > -50) {
            points += 5
            tapNote.fill = tapNote.fills.great
        }

        else if (tapNote.timer < 100 && tapNote.timer > -100) {
            points += 3
            tapNote.fill = tapNote.fills.good
        }

        else if (tapNote.timer < 150 && tapNote.timer > -150) {
            points += 1
            tapNote.fill = tapNote.fills.bad
        }

        else {
            points += 1
            tapNote.fill = tapNote.fills.miss
        }


        tapNote.hit = true
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
    text(points, width / 2, height / 2 + 200);
    pop();
}
