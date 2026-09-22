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
    
    drawHair();
    drawHead();
    drawNose();
    drawEyes();
    drawBangs();
    drawMouth();
    

}



/**
 * Draws the hair
 */

function drawHair() {
    push();
    fill(50, 10, 10);
    ellipse(300, 200, 450, 500);
    pop();
      
    
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
    fill(60, 20, 0);
    ellipse(280, 330, 25, 15);
    ellipse(320, 330, 25, 15);
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
    
    //iris 
    push();
    fill(70, 0, 200);
    ellipse(240, 260, 45, 40);
    ellipse(360, 260, 40, 60);
    pop();
    
    //pupils
    push();
    fill(100, 0, 0);
    ellipse(240, 260, 20, 20);
    ellipse(360, 260, 20, 20);
    pop();
    
}


/**
 * draws mouth
 */
function drawMouth() {
    push();
    fill(200,50,50)
    arc(300, 350, 90, 80, 0, PI + QUARTER_PI, OPEN);
    pop();
    
}

/**
 * draws bangs
 */

function drawBangs() {

    push();
    fill(50, 10, 10);
    ellipse(200, 400, 300, 400);
    pop();
      
    
    
}


