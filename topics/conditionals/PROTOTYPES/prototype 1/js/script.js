/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

let you = undefined;

let player = {
    y: 300,
    x: 850
}


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
 * draws the ocean, the fish, the background
*/
function draw() {
    background("#4157b9");

    drawYou();
    image(you, player.x, player.y, you.width * 0.1, you.height * 0.2);
}


/**
 * moves the fish up and down only
 */
function drawYou() {

    if (keyIsDown(DOWN_ARROW) === true) { player.y += 5; }
    else if (keyIsDown(UP_ARROW) === true) { player.y -= 5; }
}