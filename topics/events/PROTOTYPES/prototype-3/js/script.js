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
let titleScreen = false;
let endScreen = true;

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
        good: "#1b6f9c",
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
    background("#a79bd4");

    if (titleScreen) {
        drawTitleScreen();
    }
    else if (gamePlay) {
        drawTouchPad();
        moveTapNotes();
        drawTapNotes();
        drawAccuracy();


        push();
        fill("#223455");
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
    stroke("#44465c");
    strokeWeight(10);
    fill("#c2bfbf");
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
        stroke("#360f0f");
        strokeWeight(10);
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

    // // this is for debugging
    // push()
    // textSize(30)
    // text(tapNote.timer, width / 4, height / 4)
    // pop()

}


function drawTitleScreen() {
    push();
    background("#7ec292")
    fill("#041640")
    textAlign(CENTER, CENTER);
    textSize(140);
    textStyle(BOLD)
    textFont('Verdana')
    text("RYTHM GAME", width / 2, height / 4);
    textSize(40);
    fill("white")
    text("Listen to the music and play according to the beat", 200, height / 2, 700);
    textSize(35);
    fill("#0c0847")
    text("Press SPACE to start, and to play!", width / 2, height / 2 + 180);
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
            points += 50
            tapNote.fill = tapNote.fills.perfect

        }

        else if (tapNote.timer < 50 && tapNote.timer > -50) {
            points += 20
            tapNote.fill = tapNote.fills.great
        }

        else if (tapNote.timer < 100 && tapNote.timer > -100) {
            points += 10
            tapNote.fill = tapNote.fills.good
        }

        else if (tapNote.timer < 150 && tapNote.timer > -150) {
            points += 5
            tapNote.fill = tapNote.fills.bad
        }

        else {
            points += 0
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
    strokeWeight(0);
    fill("#e7dae5");
    ellipse(width / 2, height / 2.8, 620, 280);
    ellipse(width / 2, height / 2, 700, 400);
    pop();

    push();
    fill("#4d2357");
    textAlign(CENTER, CENTER);
    textSize(100);
    textStyle(BOLD);
    text("Total score:", width / 2, height / 2 - 100);
    pop();

    push();
    fill("#8e135d");
    textAlign(CENTER, CENTER);
    textSize(140);
    textStyle(BOLD);
    text(points, width / 2, height / 2 + 100);
    pop();

    push();
    fill("#2c2a7f");
    textAlign(CENTER, CENTER);
    strokeWeight(10)
    stroke("#46db82")
    textSize(50);
    textFont('Verdana');
    textStyle(BOLD);
    text("Wow!!!", width / 2, height - 100);
    pop();


}

/**
 * draws text if the player got perfect, great, good, bad or miss
 */
function drawAccuracy() {

    //if player gets perfect.. slightly bigger than the other texts
    if (gamePlay && tapNote.fill === tapNote.fills.perfect) {
        push();
        strokeWeight(10)
        textFont('Verdana')
        stroke("#521446")
        fill(" #ba25b5")
        textStyle(BOLD)
        textSize(70)
        text("PERFECT!", 120, 400)
        pop();
    }

    //if player gets great
    if (gamePlay && tapNote.fill === tapNote.fills.great) {
        push();
        strokeWeight(10)
        textFont('Verdana')
        stroke("#0e3f10")
        fill("#1aa51a")
        textStyle(BOLD)
        textSize(60)
        text("GREAT", 120, 400)
        pop();
    }

    //if player gets good
    if (gamePlay && tapNote.fill === tapNote.fills.good) {
        push();
        strokeWeight(10)
        textFont('Verdana')
        stroke("#182050")
        fill("#1a6ba5")
        textStyle(BOLD)
        textSize(60)
        text("GOOD", 120, 400)
        pop();
    }

    //if player gets a bad
    if (gamePlay && tapNote.fill === tapNote.fills.bad) {
        push();
        strokeWeight(10)
        textFont('Verdana')
        stroke("#182050")
        fill("#1a6ba5")
        textStyle(BOLD)
        textSize(60)
        text("BAD", 120, 400)
        pop();
    }

    //if player misses.. slightly smaller and to the left
    if (gamePlay && tapNote.fill === tapNote.fills.miss) {
        push();
        strokeWeight(10)
        textFont('Verdana')
        stroke("#080809")
        fill("#64686b")
        textStyle(BOLD)
        textSize(50)
        text("MISS...", 100, 400)
        pop();
    }



}
