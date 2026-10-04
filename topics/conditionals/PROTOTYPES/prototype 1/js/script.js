/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



let player = {
    fish: loadImage("./images/groper.png"),
    w: 100,
    h: 100
}



/**
 * creates canvas
*/
function setup() {
    createCanvas(1080, 800);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#4157b9");

    drawPlayer();
}


/**
 * draws the fish
 */
function drawPlayer() {

    image(player.fish, 400, 300, player.w * 1, player.h * 1)

}