/**
 * Title of Project
 * Justine
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * https://editor.p5js.org/pippinbarr/sketches/z8cKGbJff
 * https://editor.p5js.org/pippinbarr/sketches/Yc4eMdFyH
 */

"use strict";

let bullet1 = undefined;
let bullet2 = undefined;
let bullet3 = undefined;
let bullet4 = undefined;
let bullet5 = undefined;



let canon = {
    x: 450,
    y: 850,
    size: 100,
    velocity: 0,
    fill: ("black"),
    stroke: ("white"),
    strokes: {
        touched: ("brown"),
        untouched: ("white"),
    },
    fills: {
        touched: ("orange"),
        untouched: ("black")
    },
    destination: {
        x: 450,
        y: 850,
        size: 50
    }

}




/**
 * creates the canvas
*/
function setup() {
    createCanvas(900, 900)
}


function createBullets(x, y, size, velocity) {
    let bullets = {
        x: x,
        y: y,
        size: size,
        velocity: velocity,
    };
    return bullets;
}



/**
 * draws (-----)
*/
function draw() {
    background("black")

    // bullets =
    drawCanon();
    // moveCanon();
    moveBullets(bullet1);
    moveBullets(bullet2);
    moveBullets(bullet3);
    moveBullets(bullet4);
    moveBullets(bullet5);


    drawElement(bullet1);
    drawElement(bullet2);
    drawElement(bullet3);
    drawElement(bullet4);
    drawElement(bullet5);

    bulletsLeft();
    checkOverlap();



}

/**
 * draws the canon
 */
function drawCanon() {
    push();
    strokeWeight(20);
    stroke(canon.stroke);
    fill(canon.fill);
    ellipse(canon.x, canon.y, canon.size);
    pop();
}

// /**
//  * moves the canon right and left, when double clicking
//  */
// function moveCanon() {


// }

/**
//  * double clicking sets the spot where you can move the canon
//  */
// function doubleClicked() {

// }

/**
 * 
 * draws the bullets
 * 
 */
function drawElement(bullet) {
    if (bullet === undefined) {
        return;
    }
    push();
    fill("blue");
    ellipse(bullet.x, bullet.y, bullet.size);
    pop();
}

/**
 * clicking on the mouse while over the cannon lets a bullet loose
 */
function mouseClicked() {
    if (checkOverlap()) {
        if (bullet1 === undefined) {
            bullet1 = createBullets(canon.x, canon.y, 50, -5);
        }
        else if (bullet2 === undefined) {
            bullet2 = createBullets(canon.x, canon.y, 50, -5);
        }
        else if (bullet3 === undefined) {
            bullet3 = createBullets(canon.x, canon.y, 50, -5);
        }
        else if (bullet4 === undefined) {
            bullet4 = createBullets(canon.x, canon.y, 50, -5);
        }
        else if (bullet5 === undefined) {
            bullet5 = createBullets(canon.x, canon.y, 50, -5);
        }

    }
}

/**
 * moves the bullets
 */
function moveBullets(bullet) {

    if (bullet === undefined) {
        return undefined;
    }

    bullet.y += bullet.velocity;
    if (bullet.y + bullet.size / 2 < 0) {
        return undefined;
    }

    return bullet;


}


/**
 * calculates how many bullets the canon has left
 */
function bulletsLeft() {
    let bulletAmount = 0;
    if (bullet1 === undefined) bulletAmount += 1;
    if (bullet2 === undefined) bulletAmount += 1;
    if (bullet3 === undefined) bulletAmount += 1;
    if (bullet4 === undefined) bulletAmount += 1;
    if (bullet5 === undefined) bulletAmount += 1;


    push();
    fill("white")
    textSize(60)
    text("Bullets left: " + bulletAmount, 50, 50, 300)
    pop();
}


/** 
 * checks the overlap with the mouse and the canon
 */
function checkOverlap() {
    const d = dist(mouseX, mouseY, canon.x, canon.y);
    const overlap = d < canon.size / 2;

    if (overlap) {
        canon.fill = canon.fills.touched;
        canon.stroke = canon.strokes.touched;
    }
    else {
        canon.fill = canon.fills.untouched;
        canon.stroke = canon.strokes.untouched;
    }
    return overlap;
}
