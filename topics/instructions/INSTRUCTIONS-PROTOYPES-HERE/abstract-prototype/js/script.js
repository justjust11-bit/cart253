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
    //activate spinning ability 
    createCanvas(500, 800, WEBGL)
 
}


/**
 * Draws the abstract art
*/
function draw() {
    //dark background
    background(20, 40, 50);
  fillGradient('linear', {
    from : [0, 0],   // x, y : Coordinates
    to : [400, 400], // x, y : Coordinates
    steps : [
        color(120,140,150),
        color(20, 40, 50),
        color(10,10,20)
    ] // Array of p5.color objects or arrays containing [p5.color Object, Color Stop (0 to 1)]
});
   
    drawQuad();
    drawMovingCircles();
    drawLines();
    
}
    

/**
 * draws the twirling quad in the center
 */
function drawQuad() {
        
  
    push();
     // Rotate around the y-axis. (ps5 library)
    rotateY(frameCount * 0.02);
    strokeWeight(10);
    strokeCap(SQUARE);
    stroke(120,100,50);
    fill(255, 225, 200);
    //got this part from the ps5 library
    quad(-30, -30, 0, 30, -30, 0, 30, 30, 20, -30, 30, -20);
    pop();
}

/**
 * draws Circles
 */
function drawMovingCircles() {
    // draw the circles X axis
    //fastest
    push();
    rotateX(frameCount * 0.008);
    strokeWeight(5);
    stroke(50, 50, 100  );
    fill(170, 170, 255);
    ellipse(200, -1000, 100, 100);
    ellipse(-200, -400, 100, 100);
    pop();
    push();
    
    //second fastest circles X axis
    push();
    rotateX(frameCount * 0.006);
    strokeWeight(5);
    stroke(50, 50, 100  );
    fill(170, 170, 255);
    ellipse(-100, -300, 200, 200);
    ellipse(400, 400, 200, 200);
    pop();
    
  
    //third fastest circles X axis
    push();
    rotateX(frameCount * 0.004);
    strokeWeight(5);
    stroke(50, 50, 100  );
    fill(170, 170, 255);
    ellipse(100, -400, 200, 200);
    ellipse(700, -700, 100,100)
    pop();

 
    //slowest circles X axis
    push();
    rotateX(frameCount * 0.002);
    strokeWeight(5);
    stroke(50, 50, 100  );
    fill(170, 170, 255);
    ellipse(300, -500, 200, 200);
    ellipse(-300, -500, 200, 200);
    pop();
}

/**
 * Draws lines
 */
function drawLines() {

    //lower lines
    push();
    strokeWeight(8);
    stroke(50, 100, 100,);
    //first= straight, second== length to down, third= spot on the x, last== size to up)
    line(10, 50, 10, 100);
    //middle lines
    line(100, 50, 10, 100);
    line(-100, 50, 0, 100);
    //
    line(0, 50, 0, 100);
    line(-50, 50, 0, 102);
    line(50, 50, 10, 102)
    
    pop();
    
    //higher lines
    push();
    strokeWeight(8);
    stroke(50, 100, 100);
    line(10, -50, 10, -100);
    //middle lines
    line(100, -50, 10, -100);
    line(-100, -50, 0, -100);
    //
    line(0, -50, 0, -100);
    line(-50, -50, 0, -102);
    line(50, -50, 10, -102)
    
  
    
}