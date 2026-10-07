/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



let holes = undefined;




/**
 * draws canvas
*/
function setup() {

    createCanvas(800, 600)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#875737")

    drawHoles();
    weaselsPop();
}

/**
 * draws holes weasels will come out of
 */
function drawHoles() {

    holes =
        push();
    fill("#2b0a0a")
    //top holes from left to right
    ellipse(170, 320, 130, 130)
    ellipse(400, 320, 130, 130)
    ellipse(630, 320, 130, 130)
    //second row, left to right
    ellipse(170, 500, 130, 130)
    ellipse(400, 500, 130, 130)
    ellipse(630, 500, 130, 130)
    pop();


}


/**
//  * weasels appear out of random holes
//  */
function weaselsPop() {
    //if 3 seconds passed since the beginning of the time weve been on the screen.... weasel pop
    if (millis() - 0 >= 1000 * 3) {

        random(0, 6)

    }

}
