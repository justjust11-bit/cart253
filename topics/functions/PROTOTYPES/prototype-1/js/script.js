/**
 * Title of Project
 * Justine
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bullet1 = undefined;
let bullet2 = undefined;


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
    }

}




/**
 * creates the canvas
*/
function setup() {
    createCanvas(900, 900)
}


function createBullets(x, y, size, velocity) {
    const bullets = {
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
    checkOverlap();
    drawCanon();
    moveBullets();
    drawBullets();
}

function drawCanon() {
    push();
    strokeWeight(20);
    stroke(canon.stroke);
    fill(canon.fill);
    ellipse(canon.x, canon.y, canon.size);
    pop();
}

function drawElement(bullet) {
    push();
    fill("white");
    ellipse(bullet.x, bullet.y, bullet.size);
    pop();
}

function mouseClicked() {
    if (checkOverlap()) {
        if (bullet1 === undefined) {
            bullet1 = createBullets(canon.x, canon.y, 50, -5);
        }
        else if (bullet2 === undefined) {
            bullet2 = createBullets(canon.x, canon.y, 50, -5);
        }
    }
}

function moveBullets() {
    if (bullet1 !== undefined) {
        bullet1.y += bullet1.velocity;
        if (bullet1.y + bullet1.size / 2 < 0) {
            bullet1 = undefined;
        }
    }

    if (bullet2 !== undefined) {
        bullet2.y += bullet2.velocity;
        if (bullet2.y + bullet2.size / 2 < 0) {
            bullet2 = undefined;
        }
    }
}

function drawBullets() {
    if (bullet1 !== undefined) {
        drawElement(bullet1);
    }

    if (bullet2 !== undefined) {
        drawElement(bullet2);
    }
}

// function mouseDragged() {
//     // if (mouseX, mouseY >= width / 2) {
//     //     velocity += 1
//     // }
// }

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

