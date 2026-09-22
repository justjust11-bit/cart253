/**
 * Strange man
 * Justine Cormier
 * 
 * Red man. It's hard to determine what emotion he is feeling.
 * sample code used from p5 library: 
 * function setup() {
  createCanvas(100, 100);

  background(200);

  // OPEN fill mode.
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);

  describe(
    'A white circle missing a section from the top-right. The bottom is outlined in black.'
  );
}
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
    background(100,205,100);
    
    drawHair();
    drawBody();
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
    fill(150, 10, 10);
    ellipse(300, 200, 450, 500);
    pop();
      
    
}

/**
 * draws body
 */

function drawBody() {
    push();
    fill(150, 20, 80);
    ellipse(300, 610, 450, 500);
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
    
    //blush
    push();
    fill(210, 100, 100);
    ellipse(220, 340, 90, 60);
    ellipse(380, 340, 90, 60);
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
    ellipse(280, 330, 15, 5);
    ellipse(320, 330, 15, 5);
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
    ellipse(240, 260, 80, 100);
    ellipse(360, 260, 80, 100);
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
    fill(20,0,0)
    arc(300, 370, 10, 80, 0, PI + QUARTER_PI, OPEN);
    pop();
    
}

/**
 * draws bangs, eyebrows, other hairs
 */

function drawBangs() {

    //front hair bang
    push();
    fill(220, 80, 80);
    ellipse(220, 100, 250, 170);
    pop();
    
    //eyebrows
    push();
    fill(50, 10, 10);
    ellipse(240, 220, 80, 30);
    ellipse(360, 220, 80, 30);
    pop();
    
    //side burns
        push();
    fill( 150, 10, 10);
    //right ear
    ellipse(455, 270, 35, 60);
    //left ear
    ellipse(145, 270, 35, 60);
    pop();

}

