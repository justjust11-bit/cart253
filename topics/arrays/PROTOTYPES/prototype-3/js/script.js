/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let clovers = [];

let cloverIndex = undefined;

//canvas sizes
let canvasX = 1080;
let canvasY = {
    size: 800,
    decrease: 0.5
}

/**
 *draws the clovers from the array
*/
function setup() {

    //randomised the y, z, and angle rotation
    spawnClovers();


}

//initiates the clovers all on the screen
function spawnClovers() {

    //if the clover index has less than 30 (clovers, keep bringig them on)
    for (let cloverIndex = 0; cloverIndex < 100; cloverIndex++) {
        //10% chance of it being a 4 leaf clover
        if (random(1) < 0.1) {
            clovers.push(create4Clovers(random(100, 900), (random(150, 650)), 100, random(-20, 20)))
        } else {
            clovers.push(create3Clovers(random(100, 900), (random(150, 650)), 100, random(-30, 30)))
        }
    }

}

/**
 * 
 *creates the 4 leaf clovers
 */
function create4Clovers(x, y, size, rotate) {
    let clover4 = {
        x: x,
        y: y,
        size: size,
        rotate: rotate,
        leafCount: 4
    };
    return clover4;
}

/**
 * created 3 leaf clovers
 */
function create3Clovers(x, y, size, rotate) {
    let clover3 = {
        x: x,
        y: y,
        size: size,
        rotate: rotate,
        leafCount: 3
    };
    return clover3;

}


/**
 * creates the canvas, draws the background and the clovers
*/
function draw() {
    changeCanvas()
    createCanvas(canvasX, canvasY.size)
    background("#355e41");

    for (let clover of clovers) {
        //draws both clovers, but also distinguishes that theyre different
        if (clover.leafCount === 4) {
            draw4Clovers(clover);
        } else {
            draw3Clovers(clover);
        }
    }
}

/**
 * makes the canvas bigger or smaller
 */
function changeCanvas() {

    //makes the canvas become smaller
    // canvasY.size -= canvasY.decrease
    resizeCanvas(canvasX, canvasY.size)
}


/**
 * draws the Clovers where things pop out of
 */
function draw4Clovers(clover) {

    push();
    angleMode(DEGREES)
    stroke("#051f0b")
    strokeWeight(5)
    fill("#0a5116")
    //top right leaf
    rotate(clover.rotate)
    ellipse(clover.x, clover.y, clover.size, clover.size - 15)
    //top left leaf
    rotate(0)
    ellipse(clover.x + clover.size - 16, clover.y, clover.size, clover.size - 15)
    //bottom right leaf
    ellipse(clover.x + 5, clover.y + 60, clover.size, clover.size - 15)
    //bottom left leaf
    ellipse(clover.x + 80, clover.y + 60, clover.size, clover.size - 15)
    pop();

}

/**
 * draws the 3 leaf clovers
 */
function draw3Clovers(clover) {

    push();
    angleMode(DEGREES)
    stroke("#051f0b")
    strokeWeight(5)
    fill("#219634")
    //top right leaf
    rotate(clover.rotate)
    ellipse(clover.x + 40, clover.y, clover.size, clover.size - 15)
    //bottom right leaf
    ellipse(clover.x + 5, clover.y + 60, clover.size, clover.size - 15)
    //bottom left leaf
    ellipse(clover.x + 80, clover.y + 60, clover.size, clover.size - 15)
    pop();



}