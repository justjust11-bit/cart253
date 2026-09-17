/**
 * Mountainside Sunset
 * Clara Fioramore, Justine Cormier
 * 
 * A calm sunset washing over mountains with flowers in a prairie. 
 * 
 */

"use strict";


/**
 * Creating the canvas
*/
function setup() {
    createCanvas(800, 400)
}


/**
 * Draws our landscape with mountains 
*/
function draw() {
    // Orange background for sunset
    background(255, 172, 28)
    // No stroke on our beautiful landscape
    noStroke()

    drawPrairie();

}


/*
*Draws mountains and flowers using functions
* */

function drawPrairie() {
    drawSunset();
    drawMountains();
    drawFlowers();
    drawKirby();

}

/**
 * Draw the mountains with different colours of green for depth
 */

function drawMountains() {
    push();
    // Darkest and furthest mountain
    fill(36, 60, 36);
    ellipse(360, 400, 700, 400);
    //middle mountain
    fill(48, 80, 48);
    ellipse(200, 400, 700, 400);
    //closest mountain
    fill(84, 140, 84);
    ellipse(650, 400, 700, 400);
    pop();

}

/**
 * Draw the sunset with different colours of orange for depth and a sun
 */

function drawSunset() {
    push();
    //coral part of sunset
    fill(255, 127, 80);
    ellipse(400, 200, 1000, 300);
    //pink part of 
    fill(248, 131, 121);
    ellipse(400, 300, 1000, 300);
    //sun
    fill(253, 218, 13);
    ellipse(400, 300, 400);
    pop();

}

/**
 * Draw the flowers with variety
 */

function drawFlowers() {

    push();
    fill(255)
    //Right white petal
    ellipse(200, 300, 30, 20)
    //left white petal
    ellipse(160, 300, 30, 20)
    //up white petal
    ellipse(180, 280, 20, 30)
    //down white petal
    ellipse(180, 320, 20, 30)
    //flower yellow center
    fill(246, 200, 111);
    ellipse(180, 300, 20, 20);


    push();
    fill(255)
    //Right white petal
    ellipse(690, 250, 20, 10)
    //left white petal
    ellipse(670, 250, 20, 10)
    //up white petal
    ellipse(680, 240, 10, 20)
    //down white petal
    ellipse(680, 260, 10, 20)
    //flower yellow center
    fill(246, 200, 111);
    ellipse(680, 250, 10, 10);

}

/*
*Drawing Kirby with function
*/

function drawKirby() {
    push();
    strokeWeight(2);
    stroke(251, 130, 170);
    fill(251, 181, 207);
    //full body
    ellipse(500, 300, 100, 100);
    //right arm
    ellipse(550, 300, 30, 20);
    //left arm
    ellipse(450, 310, 30, 20);
    fill(0);
    //left eye
    ellipse(480, 290, 15, 25);
    //right eye
    ellipse(515, 290, 15, 25);
    pop();

}