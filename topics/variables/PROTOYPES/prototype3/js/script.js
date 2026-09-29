/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let bkg = {
    normal: "#14a6c4",
    flooded: "#536265"

}




/**
 * draws the canvas
*/
function setup() {
    createCanvas(800, 500)

}


/**
 * draws the city
*/
function draw() {
    background(bkg.normal)

    drawBuildings();
    drawClouds();

}

function drawBuildings() {

    push();
    stroke("#302d2d")
    strokeWeight(3)
    fill("#463f3f")
    //buildings, from left to right
    rect(0, 350, 50, 150)
    rect(50, 320, 60, 200)
    rect(110, 250, 40, 250)
    rect(150, 340, 30, 170)
    rect(130, 400, 30, 100)
    rect(170, 280, 70, 250)

    //repeat
    rect(240, 350, 50, 150)
    rect(300, 320, 60, 200)
    rect(290, 390, 30, 170)
    rect(350, 250, 40, 250)
    rect(380, 340, 30, 170)
    rect(410, 400, 30, 100)
    rect(440, 280, 70, 250)

    //repeat
    rect(510, 350, 50, 150)
    rect(560, 320, 60, 200)
    rect(620, 390, 30, 170)
    rect(650, 250, 40, 250)
    rect(680, 340, 30, 170)
    rect(710, 400, 30, 100)
    rect(740, 280, 70, 250)

    pop();

}

function drawClouds() {

    push();
    strokeWeight(0)
    fill("#eae1e1")
    //clousd on the left
    ellipse(-10, 100, 200, 100)
    ellipse(40, 150, 160, 100)
    //clouds on the right
    ellipse(700, 100, 200, 110)
    ellipse(600, 150, 160, 120)
    pop();

}