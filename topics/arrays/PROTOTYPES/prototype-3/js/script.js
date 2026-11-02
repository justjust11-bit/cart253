/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let clovers = [];

let clover3 = undefined;

//canvas sizes
let canvasX = 1080;
let canvasY = {
    size: 800,
    decrease: 0.5
}

/**
 *draws the Clovers from the array
*/
function setup() {

    clovers.push(create4Clovers(100, 100, 100, 10))
    clovers.push(create3Clovers(300, 100, 100, 5))

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
 * creates the canvas, draws the background and the Clovers
*/
function draw() {
    changeCanvas()
    createCanvas(canvasX, canvasY.size)
    background("#b5acac");
    draw4Clovers();
    draw3Clovers();
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
function draw4Clovers() {


    for (let clover4 of clovers) {
        //to distinguish 4leaf clovers and 3 leaf in teh draw
        if (clover4.leafCount === 4) {
            push();
            angleMode(DEGREES)
            stroke("#051f0b")
            strokeWeight(5)
            fill("#0a5116")
            //top right leaf
            rotate(clover4.rotate)
            ellipse(clover4.x, clover4.y, clover4.size, clover4.size - 15)
            //top left leaf
            rotate(0)
            ellipse(clover4.x + clover4.size - 16, clover4.y, clover4.size, clover4.size - 15)
            //bottom right leaf
            ellipse(clover4.x + 5, clover4.y + 60, clover4.size, clover4.size - 15)
            //bottom left leaf
            ellipse(clover4.x + 80, clover4.y + 60, clover4.size, clover4.size - 15)
            pop();
        }

    }
}

/**
 * draws the 3 leaf clovers
 */
function draw3Clovers() {
    for (let clover3 of clovers) {
        //to seperate both clovers in the draw
        if (clover3.leafCount === 3) {
            push();
            angleMode(DEGREES)
            stroke("#051f0b")
            strokeWeight(5)
            fill("#0a5116")
            //top right leaf
            rotate(clover3.rotate)
            ellipse(clover3.x + 40, clover3.y, clover3.size, clover3.size - 15)
            //bottom right leaf
            ellipse(clover3.x + 5, clover3.y + 60, clover3.size, clover3.size - 15)
            //bottom left leaf
            ellipse(clover3.x + 80, clover3.y + 60, clover3.size, clover3.size - 15)
            pop();
        }

    }
}