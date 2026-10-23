/**
 * Title of Project
 * Justine
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let ball = {
    x: 450,
    y: 850,
    size: 100,
    velocity: 0,
    fill: ("black"),
    fills: {
        touched: ("white"),
        untouched: ("black")
    }

}


/**
 * creates the canvas
*/
function setup() {
    createCanvas(900, 900)
}



/**
 * draws (-----)
*/
function draw() {
    background("black")

    checkOverlap();
    drawBow();
}

function drawBow() {
    strokeWeight(20);
    stroke("white");
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
}

// function mousePressed() {
//     if (overlap) {
//         ball.fill =


//     }
// }

// function mouseDragged() {
//     // if (mouseX, mouseY >= width / 2) {
//     //     velocity += 1
//     // }
// }

function checkOverlap() {
    const d = dist(mouseX, mouseY, ball.x, ball.y);
    const overlap = d < ball.size / 2;

    if (overlap) {
        ball.fill = ball.fills.touched;
    }
    else {
        ball.fill = ball.fills.untouched;
    }
}
