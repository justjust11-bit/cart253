/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let bkg = {
    dark: "#070931",
    bright: "white",
    lost: "#6b0000"
}

const duck = {
    x: 50,
    y: 500,
    size: 50,
    speed: null,
    maxSpeed: 2,
    acceleration: null,
    progression: 0,
    previousX: 50
}


let userCircle = {
    x: undefined,
    y: undefined,
    size: 200
}

let moving = true
let lost = false

let points = 0


async function preload() {

}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    duck.acceleration = createVector(0, 0)
    duck.speed = createVector(0, 0)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    createCanvas(1000, 1000)
    background(bkg.dark)
    noStroke();

    drawCircle();
    drawMovingCircle();
    moveCircle();

    userCircle.x = mouseX
    userCircle.y = mouseY

    checkIfInside()
    pointIncrease();
    checkWin();


}

function drawCircle() {

    fill(bkg.bright)
    ellipse(userCircle.x, userCircle.y, userCircle.size);
}

function drawMovingCircle() {

    push();
    fill("orange");
    ellipse(duck.x, duck.y, duck.size);
    pop();

}

function moveCircle() {
    if (moving) {
        duck.acceleration = createVector(random(-1, 1.2), random(-1, 1))
        duck.acceleration = createVector(random(-2, 4), random(-1, 1))


        duck.speed.add(duck.acceleration)

        duck.speed.x = constrain(duck.speed.x, 0, 2)
        duck.speed.y = constrain(duck.speed.y, -3, 3)

        if (duck.y > height - duck.size / 2 || duck.y < 0 + duck.size / 2) {
            duck.speed.y *= -1
        }

        duck.previousX = duck.x
        duck.x += duck.speed.x
        duck.y += duck.speed.y
    }

}


function pointIncrease() {

    duck.progression += duck.x - duck.previousX

    push();
    fill("white")
    textSize(100)
    text(points, 150, 150)
    pop();


    if (duck.progression > 100) {
        duck.progression = 0
        points += 1
    }

}

// checks if the duck is inside the user circle
function checkIfInside() {

    //calculate the distance between the circles centers
    const d = dist(userCircle.x, userCircle.y, duck.x, duck.y)
    const threshold = (userCircle.size - duck.size) / 2
    push()
    fill(color(255, 255, 255))
    if (d > threshold) {
        moving = false
        lost = true
        gameOver()
    } else {
        moving = true
    }
    pop()

    //check if that distance is smaller than their two radii

}

function gameOver() {
    if (lost === true) {
        duck.x = 50
        duck.previousX = duck.x
        duck.y = 500
    }
}

function checkWin() {
    if (duck.x > width) {
        fill(150)
        text("YOU WON", width / 2, height / 2)
    }
}