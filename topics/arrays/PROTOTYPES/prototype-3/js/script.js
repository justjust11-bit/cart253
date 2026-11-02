/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let holes = [];

let canvasX = 1080;


let canvasY = {
    size: 800,
    decrease: 0.5
}

/**
 *draws the holes from the array
*/
function setup() {

    holes.push(createHoles(100, 100, 100))

}

/**
 * 
 *creates the holes
 */
function createHoles(x, y, size) {
    let hole = {
        x: x,
        y: y,
        size: size,
    };
    return hole;
}

/**
 * creates the canvas, draws the background and the holes
*/
function draw() {
    changeCanvas()
    createCanvas(canvasX, canvasY.size)
    background("#b5acac");
    drawHoles();
}

/**
 * makes the canvas bigger or smaller
 */
function changeCanvas() {
    canvasY.size -= canvasY.decrease
    resizeCanvas(canvasX, canvasY.size)
}




/**
 * draws the holes where things pop out of
 */
function drawHoles() {
    for (let hole of holes) {
        push();
        stroke("#051f0b")
        strokeWeight(5)
        fill("#0a5116")
        ellipse(hole.x, hole.y, hole.size)
        pop();

    }
}