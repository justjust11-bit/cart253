/**
 * Flies flies flies!
 * Pippin Barr
 * 
 * A project 
 */

"use strict";

// Our array of flies (specifically "fly data" really)
// Each fly has a position and a size
let flies = [
    //you dont NEED TO START WITH FLIES it can be this:
    // let flies = []

    // {
    //     x: 100,
    //     y: 125,
    //     size: 10,
    //     buzziness: 2
    // },
    // {
    //     x: 160,
    //     y: 170,
    //     size: 14,
    //     buzziness: 4
    // },
    // {
    //     x: 180,
    //     y: 50,
    //     size: 5,
    //     buzziness: 6
    // }
];

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(300, 300);
}


/**
 * returns a random fly!
 */

function createFly() {
    //generate a random fly
    let fly = {
        x: random(0, width),
        y: random(0, height),
        size: random(5, 20),
        buzziness: random(2, 8)

    };
    //every time we call this function we get a random fly
    return fly;
}


/**
 * Moves and displays the flies
 */
function draw() {
    background("#87ceeb");

    // Go through all the flies
    for (let fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }
}

/**
 * Moves the fly by changing its position randomly
 * according to its buzziness
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draws the fly parameter to canvas
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * adds a random fly on any keypress
 */
function keyPressed() {
    //add a new fly to the flies array
    //create a new fly
    const newFly = createFly();
    //push adds something to the end of the current array
    //so it adds another newFly, aka it calls createfly aka
    //a new fly is added to the array
    flies.push(newFly);
}

/**
 * Remove a fly from the array if clicked
 */
function mousePressed() {

    //check ALL the flies....
    for (let fly of flies) {
        const d = dist(mouseX, mouseY, fly.x, fly.y);
        if (d < fly.size / 2) {
            //this fly was clicked!
            //get the index of this fly (to know which specifically was clicked on)
            const index = flies.indexOf(fly);
            //splice it out of the array
            flies.splice(index, 1);
        }

    }
}