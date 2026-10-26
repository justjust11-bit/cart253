/**
 * Rounding rectangle
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

let coin = undefined;

let gameWon = false;

let player = {
    fill: "rgba(200, 200, 255, 0.5)", // the alpha of the player is lowered
    x: 310,
    y: 400,
    size: tileSize + 50,
    roundness: 0 //80 seems to be good enough
}

let hole = {
    fill: ("#190000"),
    x: 410,
    y: 200,
    size: 150,
    roundness: 100
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
    drawText();
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
    rect(hole.x, hole.y, hole.size, hole.size, hole.roundness);
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
 * draws the text that indicates what to do
 */
function drawText() {
    if (!gameWon) {

        //top text
        push();
        textSize(49)
        text("Use 'WASD' to move", 50, 80)
        pop();

        //bottom text
        push();
        textSize(30)
        text("Press 'Enter' when you are the right size at the right place", 50, 940)
        pop();
    }
}



/**
 * uses keys (WASD) to move the player, when player is round enough and overlapping, go to win screen
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

    //if you press enter, the player is round enough, AND is overlapping
    if (keyCode === 13 && player.roundness >= 80 && playerOverlapsHole()) {
        gameWon = true;

    }

}

/**
 * checks whether the player's rectangle overlaps the hole (rectangle)
 * (i got help from someone for this part)
 */
function playerOverlapsHole() {
    const playerRight = player.x + player.size;
    const playerBottom = player.y + player.size;
    const holeRight = hole.x + hole.size;
    const holeBottom = hole.y + hole.size;

    const overlap =
        playerRight > hole.x &&
        player.x < holeRight &&
        playerBottom > hole.y &&
        player.y < holeBottom;

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
 * draws the winning screen, this is called in keyispressed
 */
function drawWin() {
    if (gameWon) {
        background("#7361d9")

        //ellipse
        push();
        noStroke();
        fill(25, 20, 20, 200)
        ellipse(width / 2, height / 2, 600)
        pop();

        //text
        push();
        fill("#d8d8d8")
        textSize(50)
        text("The square fit into the circle hole!", 120, height / 2)
        pop();


    }


}
