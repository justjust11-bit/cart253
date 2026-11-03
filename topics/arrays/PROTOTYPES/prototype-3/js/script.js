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
    decrease: 1
}

let cloverAmount = 150

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
    for (let cloverIndex = 0; cloverIndex < cloverAmount; cloverIndex++) {
        //10% chance of it being a 4 leaf clover
        if (random(1) < 0.1) {
            clovers.push(create4Clovers(random(50, 1000), (random(50, 750)), 100,))
        } else {
            clovers.push(create3Clovers(random(50, 1000), (random(50, 750)), 100,))
        }
    }

}

/**
 * 
 *creates the 4 leaf clovers
 */
function create4Clovers(x, y, size) {
    let clover = {
        x: x,
        y: y,
        size: size,
        special: true
    };
    return clover;
}

/**
 * created 3 leaf clovers
 */
function create3Clovers(x, y, size) {
    let clover = {
        x: x,
        y: y,
        size: size,
        special: false
    };
    return clover;

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
        if (clover.special === true) {
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
    canvasY.size -= canvasY.decrease

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
    ellipse(clover.x, clover.y, clover.size, clover.size)
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
    ellipse(clover.x, clover.y, clover.size, clover.size)
    pop();



}

/**
 * pressing with your mouse will collect the clover
 */
function mousePressed() {
    // Check topmost clover first.
    for (let cloverIndex = clovers.length - 1; cloverIndex >= 0; cloverIndex--) {
        //for both clovers
        const clover = clovers[cloverIndex];
        const distance = dist(mouseX, mouseY, clover.x, clover.y);

        if (distance < clover.size / 2) {
            clovers.splice(cloverIndex, 1);
            //adding a break makes sure it only selects one clover
            break;
        }
    }
}