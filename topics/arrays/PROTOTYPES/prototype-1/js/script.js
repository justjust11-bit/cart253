/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * https://editor.p5js.org/pippinbarr/sketches/wfDOLrIm13
 */

"use strict";

const speech = [
    "You applied for a job you are unqualified for.",
    "After a thourough investigation through HR...",
    "You've been hired!"
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
    background("black")

    boxText();

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
    text(speech[speechIndex], box.x + box.padding, box.y + box.padding, box.w - 2 * box.padding, box.h - 2 * box.padding);
    pop();
}


/**
 * When the user clicks, advance the speech if there's more.
 */
function mousePressed() {
    // Make sure we're not at the end of the speech aready
    if (speechIndex < speech.length - 1) {
        // Advance the line
        speechIndex++;
    }
}
