/**
 * Title of Project
 * Author Name
 * 
 * https://p5js.org/reference/p5/createInput/
*/
"use strict";

let hole = undefined;
let holes = []

let points = 0

//seconds that passed
let sec = undefined


let board = []

// let holeBlack = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let colors = [
    "#c48d00",
    "#4c280d",
    "#4c280d",
    "#ff0000",
    "#000000",
    "#000000",
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
        }, random(500, 1300)); //time colored

    }, random(500, 4000)); //time black
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
    drawPoints()
}


// /**
//  * time passed
//  */

// function timePassed() {

//     let sec = millis()

//     if (sec > 1000) {
//         randomColor()
//     }
// }

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


function mousePressed() {

    for (let hole of holes) {

        let d = dist(mouseX, mouseY, hole.x, hole.y)
        if (d < hole.size / 2) {
            //if the hole is the golden one
            if (hole.fill === colors[0]) {
                hole.size += 100
                hole.fill = colors[6]
                points += 5
            }

            //if the hole is the brown one
            if (hole.fill === colors[1] || colors[2]) {
                points += 2
                hole.size -= 100
                hole.fill = colors[6]


            }

            //if the hole is the red one
            if (hole.fill === colors[3]) {
                points -= 10
                hole.size += 400
                hole.fill = colors[6]

            }

            //if the hole is black
            else
                hole.size = 120
            points -= 1


        }

    }
}

function drawPoints() {

    push()
    fill("black")
    textSize(100)
    text(points, 200, 200)
    pop();
}





