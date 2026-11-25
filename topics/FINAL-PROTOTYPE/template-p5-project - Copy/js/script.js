/**
 * Title of Project
 * Author Name
 * 
 * https://p5js.org/reference/p5/createInput/
*/
"use strict";

let hole = undefined;
let holes = []

let points = 1000

//seconds that passed
let sec = undefined

//for strokeweight
let outlineSize = 10

let strokeFill = "#261f1f"

let board = []

let inGame = true;
let gameLost = false;
let gameWon = false;

// let holeBlack = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let colors = [
    "#c48d00",
    "#4c280d",
    "#4c280d",
    "#cd0909",
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
    black: "black",
    won: "blue",
    lost: "red",
    surprise: "green",
    white: "#ffffff"
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
    let size = 140
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
    drawInGame()

}

function drawInGame() {
    if (inGame === true) {
        background(bkg.grey)

        push();
        textSize(50)
        fill("white")
        text("Reach 1010 points", width / 2, 100)
        pop();
        timePassed()

        drawHoles()
        drawPoints()


    }
}

/**
 * time passed
 */

function timePassed() {

    let sec = millis()

    if (sec > 1000) {
        bkg.grey = bkg.black
    }
}

function drawHoles() {

    //got help from michael for this part
    console.log(holes)
    for (let hole of holes) {
        push();
        // strokeWeight(outlineSize)
        noStroke()
        // stroke(strokeFill)
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
                // hole.size += 100
                hole.fill = colors[6] //switch it back to a black colour, so the player cant click
                //really fast twice and get double or triple points
                points += 100
            }

            //if the hole is the brown one
            else if (hole.fill === colors[1] || hole.fill === colors[2]) {
                points += 2
                // hole.size -= 100
                strokeFill = "pink"
                hole.fill = colors[6]
                hole.size -= 40



            }

            //if the hole is the red one
            else if (hole.fill === colors[3]) {
                drawGameLost()
                inGame = false
                gameLost = true

            }


        }

    }
}

function drawPoints() {

    push()
    fill("white")
    textSize(100)
    text(points, 200, 200)
    pop();

    if (points === 1010) {
        drawGameWon()
        inGame = false
        gameWon = true
    }

    if (points > 1010) {
        inGame = false
        drawSurprise()

    }

}

function drawGameLost() {
    background("red")
    textSize(100)
    fill("white")
    text("you lost", width / 2, height / 2)


}


function drawGameWon() {

    background("blue")
    textSize(100)
    fill("white")
    text("you won", width / 2, height / 2)

}

function drawSurprise() {

    background("#000000")

    lerpColor("#000000", "#ffffff", 0.5)


}





