/**
 * Speech! Speech!
 * Author Name
 * 
 * interactive speech playing interface!
 */

"use strict";

//the speech itself ----starts at 0, 1, 2 ,3 4
const speech = ["Veni.", "vidi.", "Vici.", "Sensi malum."];
//which sentence in the speech to display
let speechIndex = 0;


/**
 * create canvas
*/
function setup() {
    createCanvas(600, 100)
}


/**
 * dsplays the current line of the speech
*/
function draw() {
    background(0);
    //get the current line of the speech
    let currentLine = speech[speechIndex];

    //display the line
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentLine, width / 2, height / 2);
    pop();
}

function mousePressed() {
    //next line
    //both of the following mean the same thing
    // speechIndex += 1
    speechIndex = speechIndex + 1;

    //handle the end of the speech
    //if the index gets to 4 (bigger than the length of the speech)
    //the .length is a javascript variable
    if (speechIndex >= speech.length) {
        //start over
        speechIndex = 0;
    }

}