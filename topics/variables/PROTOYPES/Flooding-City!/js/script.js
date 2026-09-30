/**
 * Flooding City!
 * Justine Cormier
 * 
 * Water floods the whole city!! The sky turns grey, and water covers the city
 * past its highest building! With the ongoing climate crisis, this might happen to Montreal one day....
 */

"use strict";


let bkg = {
    normal: "#14a6c4",
    flooded: "#444c4e"
}

let darknessSpeed = 0.004

let flood = {
    x: 120,
    //where it starts
    y: 520,
    //over tallest building
    topLimit: 230,
    size: 50,
    riseSpeed: 0.4,
    velocity: {
        x: 0,
        min: -3,
        max: 3,
    },
    acceleration: {
        x: 0.01,
    }

}




/**
 * draws the canvas
*/
function setup() {
    createCanvas(800, 500);

    //make the sky colors colors
    bkg.normal = color(bkg.normal);
    bkg.flooded = color(bkg.flooded);

    //move the flood upwards
    flood.velocity.x += flood.acceleration.x;

    flood.velocity.x = constrain(flood.velocity.x, flood.velocity.min, flood.velocity.max);



    flood.x += flood.velocity.x;



}


/**
 * draws the city
*/
function draw() {
    background(bkg.normal);
    //makes the sky turn grey
    bkg.normal = lerpColor(bkg.normal, bkg.flooded, darknessSpeed);

    drawBuildings();
    drawClouds();
    drawFlood();

}


/**
 * draws the buildings
 */
function drawBuildings() {

    push();
    strokeWeight(0);
    fill("#2a2727");
    rect(150, 340, 30, 170);
    rect(300, 320, 60, 200);
    rect(290, 390, 30, 170);
    rect(410, 400, 30, 100);
    rect(650, 280, 40, 250);
    rect(710, 400, 30, 100);
    pop();


    push();
    stroke("#302d2d");
    strokeWeight(3);
    fill("#463f3f");
    //buildings, from left to right
    rect(0, 350, 50, 150);
    rect(50, 320, 60, 200);
    rect(110, 250, 40, 250);
    rect(130, 400, 30, 100);
    rect(170, 280, 70, 250);

    //repeat
    rect(240, 350, 50, 150);
    rect(350, 250, 40, 250);
    rect(380, 340, 30, 170);
    rect(440, 280, 70, 250);

    //repeat
    rect(510, 350, 50, 150);
    rect(560, 320, 60, 200);
    rect(620, 390, 30, 170);
    rect(680, 340, 30, 170);
    rect(740, 280, 70, 250);
    pop();

}

/**
 * draws the clouds
 */
function drawClouds() {

    push();
    strokeWeight(0);
    fill("#c2b8b8");
    //clousd on the left
    ellipse(-10, 100, 200, 100);
    ellipse(40, 150, 160, 100);
    //clouds on the right
    ellipse(700, 100, 200, 110);
    ellipse(600, 150, 160, 120);
    pop();

}

/**
 * draws the flood
 */
function drawFlood() {

    flood.y = max(flood.topLimit, flood.y - flood.riseSpeed);
    //higher wave
    push();
    strokeWeight(0);
    fill(40, 38, 150, 120);
    rect(0, flood.y, 800, height - flood.y);
    pop();

    //lower wave
    push();
    strokeWeight(0);
    fill(40, 38, 150, 120);
    rect(0, flood.y + 10, 800, height - flood.y);
    pop();


}