/**
 * Tarot
 * Pippin Barr
 * 
 * Some experiments with data representing a Tarot deck
 */

"use strict";

let tarot = undefined;
let fortune = "click to show a fortune";

/**
 * Create a canvas
*/
async function setup() {
    tarot = await loadJSON("assets/data/tarot_interpretations.json");
    createCanvas(800, 400);
}


/**
 * display tarot
*/
function draw() {
    background(0);




    // //tarot.description is pulled FROM THE JSON FILE
    // const card = tarot.tarot_interpretations[0];
    // const meanings = card.meanings;
    // const shadows = meanings.shadow
    // const fool = shadows[0];


    //Display the information
    push();
    textSize(16);
    fill("yellow");
    textAlign(CENTER, CENTER);
    text(fortune, width / 2, height / 2);
    pop();

}

function mousePressed() {

    //choose a random card
    const card = random(tarot.tarot_interpretations);
    //choose a random fortune
    fortune = random(card.fortune_telling);
}