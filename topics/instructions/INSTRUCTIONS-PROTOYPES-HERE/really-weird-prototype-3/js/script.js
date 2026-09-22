/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates canvas
*/
function setup() {
    createCanvas(600, 600);
    //removes strokes
    noStroke()
    
}


/**
 * Draws
*/
function draw() {
    //black background
    background("black");
    
   // drawHair();
    drawHead();
    drawNose();
    drawEyes();
    drawBangs();
    

}


/**
 * Draws the head
 */
function drawHead() {
    
    //head base
    push();
    fill(210, 160, 110);
    ellipse(300, 300, 300, 300);
    pop();
    
    
    //forehead  
    push();
    fill(210, 160, 110);
    ellipse(300, 200, 330, 250);
    pop();
    
    //chin
    push();
    fill(210, 160, 110);
    ellipse(300, 430, 150, 100);
    pop();
    
    //ears
    push();
    fill(210, 160, 110);
    //right ear
    ellipse(440, 310, 100, 110);
    //right lobe
    ellipse(440, 360, 50, 50);
    
    //left ear
    ellipse(160, 310, 100, 110);
    //left lobe
    ellipse(160, 360, 50, 50);
    pop();
    
    //inside of ear
    push();
    fill(210, 140, 90);
    //right ear
    ellipse(450, 310, 35, 60);
    //left ear
    ellipse(150, 310, 35, 60);
    pop();
    
    //butt chin
    push();
    fill(210, 140, 90);
    ellipse(300, 450, 30, 30);
    pop();
    
}

/**
 * draws nose
 */

function drawNose() {
    
    //nose shadow
    push();
    fill(210, 135, 85);
    ellipse(300, 300, 120, 40);
    pop();
    
    //nostrils
    push();
    fill(210, 135, 85);
    ellipse(300, 300, 10, 20);
    pop();
     
    
    
    
}

/**
 * draws eyes
 */

function drawEyes() {
    
    //eye shadow
    push();
    fill(210, 140, 90);
    ellipse(230, 240, 100, 80);
    ellipse(370, 240, 100, 80);
    pop();
    
    //lashes
    push();
    fill(0, 0, 0);
    ellipse(230, 255, 70, 70);
    ellipse(370, 255, 70, 70);
    pop();
    
    //white of the eyes
    push();
    fill(250, 230, 230);
    ellipse(240, 260, 80, 80);
    ellipse(360, 260, 80, 80);
    pop();
    
        //black of the eyes
    push();
    fill(70, 0, 0);
    ellipse(240, 260, 60, 40);
    ellipse(360, 260, 40, 60);
    pop();
    
    //pupils
            //black of the eyes
    push();
    fill(100, 0, 0);
    ellipse(240, 260, 20, 20);
    ellipse(360, 260, 20, 20);
    pop();
    

    
    
    
    
    
    
}