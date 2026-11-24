/**
 * Title of Project
 * Author Name
 * 
 * https://p5js.org/reference/p5/createInput/
*/
"use strict";

let hole = undefined;
let holes = []



//seconds that passed
let sec = undefined


let board = []

// let holeBlack = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let colors = [
    "#000000",
    "#675017",
    "#361904",
    "#ff0000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
]

// let holeFill = colors[0];


let bkg = {
    grey: "#959292",
    pink: "pink"
}

/**
 * creates the canvas
*/
function setup() {
    createCanvas(1000, 1000)
    createHoles()



}

function createHole(x, y, size, gap) {
    let hole = {
        x: x,
        y: y,
        size: size,
        gap: gap,
        fill: 0
    }
    startTimer(hole)

    return hole
}

function startTimer(hole) {


    setTimeout(() => {
        hole.fill = random(colors);
        setTimeout(() => {
            hole.fill = "black";
            //restarts the function over and over
            startTimer(hole)
        }, random(100, 2000));

    }, random(1000, 2000));
}

function createHoles() {

    let x = 200 // restart from x = 200 when starting a new line
    let y = 400
    let size = 120
    let gap = 150


    // use two for loops to fill the board
    for (let i = 0; i < 4; i++) {
        // create a new line
        let row = []
        // add the line to the board
        board.push(row)
        y = 400 + i * gap

        for (let j = 0; j < 5; j++) {
            x = 200 + j * gap

            holes.push(createHole(x, y, size, gap, colors.black))
        }
    }
}

/**
 * draws the holes
*/
function draw() {
    background(bkg.grey)
    // timePassed()

    drawHoles()

}


/**
 * time passed
 */

function timePassed() {

    let sec = millis()

    if (sec > 1000) {
        randomColor()
    }

}

function drawHoles() {



    //got help from michael for this part
    console.log(holes)
    for (let hole of holes) {
        push();
        noStroke()
        fill(hole.fill)
        ellipse(hole.x, hole.y, hole.size)
        pop()

    }
}


/**
 * randomizes the color of the holes
 */

function randomColor() {

    colors[0] = random(colors)
    bkg.grey = "pink"

    for (let hole of holes) {
        hole.fill = random(colors)
    }

}




