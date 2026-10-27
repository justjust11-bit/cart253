/**
 * The Square Hole
 * 
 * Justine Cormier
 * 
 * In this minigame, you use WASD to move.
 * You start off as a square, and collecting coins make you rounder.  
 * Try to collect as many "coins" as necessary to be able to fit into the hole.
 * In the code I used functions and refactoring, so a second player could be added keeping the structure
 * of the code. In this case, both players would try to get the coins before the other, and there would be only one winner.
 * 
 * refs used: https://editor.p5js.org/pippinbarr/sketches/fD7Ha1Yva
 * https://editor.p5js.org/pippinbarr/sketches/dJyJ_NV4L
 */

"use strict";

const tileSize = 100

// Dimensions of the "world"
const rows = 10;
const columns = 10;

let coin = undefined;
let player = undefined;

let gameWon = false;

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
    player = createPlayer(310, 400, tileSize + 50, 0, "rgba(200, 200, 255, 0.5)");
    coin = createCoin(random(0, width - tileSize), random(0, height - tileSize), tileSize, "#84cf62");
    //width or height (- tilesize) makes sure the coin stays within the canvas
}

/**
 * creates the player and stores its properties
 */
function createPlayer(x, y, size, roundness, fill) {
    let player = {
        x: x,
        y: y,
        size: size,
        roundness: roundness,
        fill: fill
    };
    return player;
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
    drawHole();
    drawPlayer(player);
    drawCoin(coin);
    collectCoin();
    drawText();

    if (gameWon) {
        drawWin();
        return;
    }
}


/**
 * draws the hole the square wants to get into
 */
function drawHole() {
    push();
    noStroke();
    fill(hole.fill);
    rect(hole.x, hole.y, hole.size, hole.size, hole.roundness);
    pop();
}

/**
 * draws the player
 */
function drawPlayer(player) {
    push();
    noStroke();
    fill(player.fill);
    rect(player.x, player.y, player.size, player.size, player.roundness);
    pop();
}




/**
 * uses keys (WASD) to move the player, when player is round enough and overlapping, go to win screen
 */
function keyPressed(event) {
    //pressing enter when you are round and over circle, changes to winning screen
    if (event.key === "Enter") {
        if (player.roundness >= 80 && playerOverlapsHole(player, hole)) {
            gameWon = true;
        }
        return;
    }

    //if W is pressed, it goes UP
    if (keyCode === 87) {
        movePlayer(player, "up");
    }
    // S - DOWN
    else if (keyCode === 83) {
        movePlayer(player, "down");
    }
    // D - RIGHT
    else if (keyCode === 68) {
        movePlayer(player, "right");
    }

    // A - LEFT
    else if (keyCode === 65) {
        movePlayer(player, "left");
    }
}



/**
 * moves the player according to  the tilesize
 */
function movePlayer(player, direction) {
    if (direction === "up") {
        player.y -= tileSize;
    }
    else if (direction === "down") {
        player.y += tileSize;
    }
    else if (direction === "left") {
        player.x -= tileSize;
    }
    else if (direction === "right") {
        player.x += tileSize;
    }
}

/**
 * checks whether the player's rectangle overlaps the hole (rectangle)
 * (i got help from someone for this part)
 */
function playerOverlapsHole(player, hole) {
    //adding constants about the rectangular shapes to simplify the code lower
    const playerRight = player.x + player.size;
    const playerBottom = player.y + player.size;
    const holeRight = hole.x + hole.size;
    const holeBottom = hole.y + hole.size;

    //checking the overlap of both circles (that are really rectangles)
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

    //checks the overlap of the coin and player, but with wiggle room
    const overlap =
        player.x < coin.x + coin.size - wiggleRoom &&
        player.x + player.size > coin.x + wiggleRoom &&
        player.y < coin.y + coin.size - wiggleRoom &&
        player.y + player.size > coin.y + wiggleRoom;

    //if theres an overlap, the player gets more round, and there is a new coin generated
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

/**
 * draws the text that indicates what to do to the player
 */
function drawText() {
    if (!gameWon) {

        //top text
        push();
        textSize(35)
        fill("white")
        text("Press 'Enter' as the right shape at the right place", 50, 80)
        pop();


        //bottom text
        push();
        textSize(30)
        fill("white")
        text("Use 'WASD' to move", 50, 130)
        pop();
    }
}
