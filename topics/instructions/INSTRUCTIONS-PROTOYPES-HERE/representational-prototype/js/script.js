/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(640, 480);
}


/**
 * Draws the scene
*/
function draw() {
    // night sky aka background
    background(40, 40, 90)
    
    //no stroke everywhere
    noStroke();
    
    drawGround();
    drawMoon();
    drawHouse();
}

/**
 * Draws the ground
 */
function drawGround() {
    
    fill(20, 20, 15);
    ellipse(320, 850, 1400, 1000);
}

/**
 * Draws the moon
 */
function drawMoon() {
    fill(255, 255, 200);
    ellipse(110, 100, 100, 100);
}

function drawHouse() {
    drawBody();
    // drawWindow();
    // drawPig();
    
    /**
     * Draws the body AND THE ROOF and CHIMNEYof the house
     */
    function drawBody() {
        // house body
        push();
        fill(22, 20, 15);
        rect(180, 200, 240, 200);
        pop();

        // roof
        push();
        fill(22, 20, 15);
        triangle(180, 200, 320, 100, 420, 200);
        pop();
    
        // Chimney
        push();
        fill(22, 20, 15);
        rect(360, 120, 42, 80);
        pop();
    
    }
}
