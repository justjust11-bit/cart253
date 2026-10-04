/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

let you = undefined;

"use strict";

//loading the image of the player (fish)
async function preload() {
    you = await loadImage("./images/groper.png");
}



/**
 * creates canvas
*/
async function setup() {
    createCanvas(1080, 800);
    await preload();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#4157b9");

    image(you, 400, 300, you * 1, you * 1)
}

