/**
 * Round Clover Hunt
 * Justine Cormier
 * 
 * Try collecting as many of the dark (special) clovers as you can before the canvas collapses!
 * Click to collect the clovers, only the dark ones will be counter into the final tally.
 */

"use strict";


let clovers = [];

let cloverIndex = undefined;


let inGame = true;
let gameOver = false;

//canvas sizes
let canvasX = 1080;
let canvasY = {
    size: 800,
    decrease: 1.2
}

//total amount of clovers to be spawned on the screen
let cloverAmount = 150;
//special clovers collected
let collectedClovers = 0;
//total special clovers that got spawned 
let totalSpecialClovers = 0;

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
        //10% chance of it being a special clover
        if (random(1) < 0.1) {
            clovers.push(createSpecialClovers(random(10, 1060), (random(20, 730)), 100,))
            //counts how many special clovers were spawned
            totalSpecialClovers++;
        } else {
            clovers.push(createNormalClovers(random(10, 1060), (random(20, 730)), 100,))
        }
    }

}

/**
 * 
 *creates the special clovers
 */
function createSpecialClovers(x, y, size) {
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
function createNormalClovers(x, y, size) {
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
    drawInGame();

    if (gameOver) {
        drawGameOver();
        //return erases the previous clover screen
        return;
    }

    for (let clover of clovers) {
        //draws both clovers, but also distinguishes that theyre different
        if (clover.special === true) {
            drawSpecialClovers(clover);
        } else {
            drawNormalClovers(clover);
        }
    }
}

/**
 * makes the canvas bigger or smaller
 */
function changeCanvas() {
    if (inGame === true) {
        //makes the canvas become smaller
        canvasY.size -= canvasY.decrease
        let canvasTop = canvasY.height
        canvasTop -= canvasY.decrease

        resizeCanvas(canvasX, canvasY.size)

        //close the canvas up a little faster at the end
        if (canvasY.size <= 100) {
            canvasY.decrease += 0.1
        }
        //if the canvas y size is 20 pixels or less close it up and go to gameover screen
        if (canvasY.size <= 20) {
            inGame = false;
            gameOver = true;

        }
    }
}

//draws the background color for ingame
function drawInGame() {
    push();
    background("#355e41");
    pop();
}
/**
 * draws the Clovers where things pop out of
 */
function drawSpecialClovers(clover) {
    push();
    stroke("#051f0b")
    strokeWeight(5)
    fill("#0a5116")
    //top right leaf
    ellipse(clover.x, clover.y, clover.size, clover.size)
    pop();
}

/**
 * draws the 3 leaf clovers
 */
function drawNormalClovers(clover) {

    push();
    stroke("#051f0b")
    strokeWeight(5)
    fill("#219634")
    //top right leaf
    ellipse(clover.x, clover.y, clover.size, clover.size)
    pop();
}

/**
 * pressing with your mouse will collect the clover
 */
function mousePressed() {
    // check topmost clover first
    for (let cloverIndex = clovers.length - 1; cloverIndex >= 0; cloverIndex--) {
        //for both clovers
        const clover = clovers[cloverIndex];
        const distance = dist(mouseX, mouseY, clover.x, clover.y);

        if (distance < clover.size / 2) {
            clovers.splice(cloverIndex, 1);
            //only have the special clovers selected for the counter at the end
            if (clover.special === true) {
                collectedClovers += 1
            }
            //adding a break makes sure it only selects one clover
            break;
        }
    }
}

/**
 * draws the gameover screen, tells you how many clovers out of the total youu collected
 */

function drawGameOver() {
    if (gameOver === true) {

        push();
        createCanvas(1080, 800)
        background("#172e1e");
        pop();
        push();
        fill("white")
        textAlign(CENTER, CENTER)
        textSize(50)
        //you collected how many special clovers out of how many there were on screen
        text("You collected " + collectedClovers + " out of " + totalSpecialClovers + " special clovers", width / 2, height / 2)
        pop();
    }
}