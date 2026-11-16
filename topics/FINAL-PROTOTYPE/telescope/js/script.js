/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let beginning = true
let telescope = false;



//images imported
let starrySkyPic = undefined


//preloads the photos
async function preload() {

    starrySkyPic = await loadImage("./assets/images/sky_planets.png")
}


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(1000, 610)
    background("#1e1b26")
    await preload();


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
async function draw() {

    drawBeginningScreen();
    drawTelescopeScreen();

}


function drawBeginningScreen() {
    if (beginning) {

        push();
        noStroke();
        fill("#637372")
        rect(0, 330, width, 320)
        pop();


        push();
        noStroke();
        fill("#c14d4d")
        rect(width / 2 - 200, height / 2 - 220, 500, 400, 180, 180, 15, 15)
        fill("#978586")
        rect(width / 2 - 100, 10, 300, 200, 300, 300, 100, 100)
        pop();
        //door
        push();
        fill("black")
        rect(width / 2 - 50, height / 2, 100, 150, 50, 50, 10, 10)
        pop();

    }

}



function drawTelescopeScreen() {
    if (telescope) {
        drawBkgStarry()
        drawTelescope()
    }
}



//draws the background
function drawBkgStarry() {
    push();
    image(starrySkyPic, 0, 0, width, height)
    pop();
}

//draws the huge ellipse with a ridiculous amount of strokeWeight, to simulate a telescope
function drawTelescope() {
    push();
    strokeWeight(1200)
    fill(20, 20, 20, 0)
    ellipse(mouseX, mouseY, 1350)
    pop();
}

function mousePressed() {
    if (beginning) {
        telescope = true
        beginning = false
    }
}
