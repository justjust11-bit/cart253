/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * https://p5js.org/reference/p5/createInput/
 */

"use strict";

let searchBar;

/**
 * creates canvas, adds searchBar
*/
function setup() {
    createCanvas(1080, 800)
    searchBar = createInput('');
    searchBar.position(1850, 900);
    searchBar.size(500, 50);
    searchBar.style('font-size', '32px');
    describe('search bar for you to write stuff into')
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#b5acac")
    drawUserMessage()

}

function drawUserMessage() {
    let msg = searchBar.value();
    text(msg, 25, 55);
}