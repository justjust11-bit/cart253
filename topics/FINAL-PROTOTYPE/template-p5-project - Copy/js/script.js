/**
 * Title of Project
 * Author Name
 * 
 * https://p5js.org/reference/p5/createInput/
*/
"use strict";



let board = []



/**
 * creates the canvas
*/
function setup() {
    createCanvas(1000, 1000)

}

// function createHole() {
//     let hole = {
//         x: 200,
//         y: 
//     }
// }

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(100)
    drawHoles()


}

function drawHoles() {

    // let numHoles = map(mouseY, 0, height, 0, 9)
    let x = 200 // restart from x = 200 when starting a new line
    let y = 400
    let size = 120
    let gap = 150
    let t = 0

    // use two for loops to fill the board
    for (let i = 0; i < 4; i++) {
        // create a new line
        let row = []
        // add the line to the board
        board.push(row)
        y = 400 + i * gap

        for (let j = 0; j < 5; j++) {
            x = 200 + j * gap
            fill("black")
            ellipse(x, y, size)
            row.push(t++)
        }
    }

    fill(0)
    textSize(50)
    text(board[1][0], 100, 100)
}




