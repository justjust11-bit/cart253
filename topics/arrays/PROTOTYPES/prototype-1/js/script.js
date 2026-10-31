/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * https://editor.p5js.org/pippinbarr/sketches/wfDOLrIm13
 */

"use strict";

let intro = true;
let inGame = false;
let fired = false;

let bkg = {
    intro: "black",
    inGame: "grey",
    fired: "red"
}

const introSpeech = [
    "You applied for a job you are unqualified for.",
    "After a thorough investigation with HR...",
    "You've been hired!",
    "Congratulations, and welcome to your new job!"
];

const inGameSpeech = [
    "First day on the job...",
    "You work at an earthquake detection center",
];

let speechIndex = 0;

let box = {
    x: 70,
    y: 600,
    w: 940,
    h: 150,
    padding: 40,
    fontSize: 30,
};

/**
 * 
*/
function setup() {
    createCanvas(1080, 800)



}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    drawIntro();


}


/**
 * draws the intro screen
 */
function drawIntro() {
    if (intro) {
        drawResume();
        boxText();
    }

    if (!intro && inGame) {
        drawInGame();
        boxText();
    }

}

/**
 * draws the at work scene
 */

function drawInGame() {

    background(bkg.inGame)

}

/**
 * draws the resume paper in the intro screen
 */
function drawResume() {
    background(bkg.intro)

    //white paper
    push();
    fill("#f0efe5")
    rect(400, 100, 300, 400)
    pop();

    //text on CV
    push();
    fill("#343333")
    textSize(20)
    textFont("times new roman")
    text("Your Name", 430, 160)
    textSize(50)
    text("CV", 515, 320)
    pop();


}


/**
 * display the text in a dialogue box
 */
function boxText() {
    // The background box
    push();
    fill(20);
    stroke("#d3cbb3");
    strokeWeight(3);
    rect(box.x, box.y, box.w, box.h);
    pop();

    // The text dimensions for the text to wrap inside, including
    // the padding of the dialog box
    push();
    fill("#f3f1eb");
    textSize(box.fontSize);
    text(introSpeech[speechIndex], box.x + box.padding, box.y + box.padding, box.w - 2 * box.padding, box.h - 2 * box.padding);
    pop();
}


/**
 * When the user clicks, advance the speech if there's more
 */
function mousePressed() {
    // if not at the end of the speech aready
    if (intro) {
        if (speechIndex < introSpeech.length) {
            // Advance the line
            speechIndex++;
        }
        else {
            intro = false;
            inGame = true;
            speechIndex = 0;
        }
    } else if (inGame && speechIndex < inGameSpeech.length - 1) {
        speechIndex++;
    }
}


