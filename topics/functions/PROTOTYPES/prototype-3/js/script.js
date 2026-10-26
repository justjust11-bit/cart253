/**
 * Title of Project
 * Justine Cormier
 * 
 * 
 * 
 * refs used: https://editor.p5js.org/pippinbarr/sketches/fD7Ha1Yva
 */

"use strict";

const tileSize = 100

// Dimensions of the "world"
const rows = 10;
const columns = 10;

let coin = undefined

let player = {
    fill: "rgba(200, 200, 255, 0.5)", // the alpha of the player is lowered
    x: 310,
    y: 400,
    size: tileSize + 50,
    roundness: 0 //80 seems to be good enough
}

let hole = {
    fill: ("#190000"),
    x: 485,
    y: 175,
    size: 150
}




/**
 * creates canvas
*/
function setup() {
    createCanvas(tileSize * columns, tileSize * rows)
    coin = createCoin(random(0, width - tileSize), random(0, height - tileSize), tileSize, "#84cf62");
    //width or height (- tilesize) makes sure the coin stays within the canvas
}

/**
 * creates the coin and stores its properties
 */
function createCoin(x, y, size, fill) {
    let coin = {
        x: x,
        y: y,
        size: size,
        fill: fill
    }
    return coin;
}


/**
 * draws the player, the circle hole, the coin
*/
function draw() {
    background("#5d49c1")
    drawCircleHole();
    drawPlayer();
    drawCoin(coin);
    collectCoin();
    drawWin();
}


/**
 * draws the hole the square wants to get into
 */
function drawCircleHole() {
    push();
    noStroke();
    fill(hole.fill);
    ellipse(hole.x, hole.y, hole.size);
    pop();
}

/**
 * draws the player
 */
function drawPlayer() {
    push();
    noStroke();
    fill(player.fill);
    rect(player.x, player.y, player.size, player.size, player.roundness);
    pop();
}


/**
 * uses keys (WASD) to move the player
 */
function keyPressed() {

    console.log(player.x, player.y, player.roundness)
    //if W is pressed, it goes UP
    if (keyCode === 87) {
        player.y -= tileSize
    }
    // S - DOWN
    if (keyCode === 83) {
        player.y += tileSize
    }
    // D - RIGHT
    if (keyCode === 68) {
        player.x += tileSize
    }
    // A - LEFT
    if (keyCode === 65) {
        player.x -= tileSize
    }


    if (keyCode === 32 && player.roundness >= 80 && playerOverlapsHole()) {
        drawWin()

    }

}

/**
 * checks whether the player's rectangle overlaps the circular hole
 */
function playerOverlapsHole() {
    //calculates the height and width of the player for the lower calculations
    let pWidth = player.x + player.size
    let pHeight = player.y + player.size


    const overlap =
        // the players right edge is past the holes left edge
        pWidth > hole.x - hole.size / 2 &&
        // the left edge is before the hole's right edge
        player.x < hole.x + hole.size / 2 &&
        // the bottom edge is below the hole's top edge
        pHeight > hole.y - hole.size / 2 &&
        // the top edge is above the hole's bottom edge
        player.y < hole.y + hole.size / 2;

    return overlap;

}

/**
 * draws the coin
 */
function drawCoin(coin) {
    push();
    noStroke();
    fill(coin.fill);
    ellipse(coin.x + coin.size / 2, coin.y + coin.size / 2, coin.size);
    pop();
}

/**
 * replaces the coin when the player touches it
 */
function collectCoin() {
    //so the overlap isnt too strict/severe/precise
    const wiggleRoom = 60

    const overlap =
        player.x < coin.x + coin.size - wiggleRoom &&
        player.x + player.size > coin.x + wiggleRoom &&
        player.y < coin.y + coin.size - wiggleRoom &&
        player.y + player.size > coin.y + wiggleRoom;

    if (overlap) {
        roundPlayer();
        coin = createCoin(random(0, width - tileSize), random(0, height - tileSize), tileSize, color(random(255), random(255), random(255)));
    }

}

/** 
 * rounds the player after collecting a coin, since this is called in collect coin
 */
function roundPlayer() {

    player.roundness += 10

}

/**
 * draws the winning screen
 */
function drawWin() {


}
