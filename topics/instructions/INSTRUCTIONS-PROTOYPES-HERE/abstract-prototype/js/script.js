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
    //spinning quad
    createCanvas(500, 1000, WEBGL)
    
}


/**
 * Draws the abstract art
*/
function draw() {
    //pink background
    background(230, 150, 200);
    
    drawQuad();
    drawMovingCircles();
    drawBkgCircles();
}
    
/**
 * draws Quad
 */
function drawQuad() {
        
    // Draw the quad.
    push();
     // Rotate around the y-axis. (ps5 library)
    rotateY(frameCount * 0.02);
    strokeWeight(10);
    stroke(240,240,50);
    fill(100, 20, 250);
    //got this part from the ps5 library
    quad(-30, -30, 0, 30, -30, 0, 30, 30, 20, -30, 30, -20);
    pop();
}

/**
 * draws Circles
 */
function drawMovingCircles() {
    // draw the circles
    //fastest circles X axis
    push();
    rotateX(frameCount * 0.008);
    strokeWeight(15);
    stroke(150, 50, 50  );
    fill(150, 20, 250);
    ellipse(-50, -1000, 100, 100);
    ellipse(-100, -200, 100, 100);
    pop();
    push();
    
    //second fastest circles X axis
    push();
    rotateX(frameCount * 0.006);
    strokeWeight(15);
    stroke(150, 50, 50  );
    fill(150, 20, 250);
    ellipse(-100, -300, 200, 200);
    pop();
    
  
    //third fastest circles X axis
    push();
    rotateX(frameCount * 0.004);
    strokeWeight(15);
    stroke(150, 50, 50  );
    fill(150, 20, 250);
    ellipse(-200, -400, 200, 200);
    pop();

 
    //slowest circles X axis
    push();
    rotateX(frameCount * 0.002);
    strokeWeight(15);
    stroke(150, 50, 50  );
    fill(150, 20, 250);
    ellipse(-300, -500, 200, 200);
    pop();
}

/**
 * draws Background Circles
 */
function drawBkgCircles() {
    // draw the circles
    push();
    //removes stroke
    nostroke();
    fill(255, 0, 0);
    ellipse(-100, -500, 500, 500);
    pop();
}