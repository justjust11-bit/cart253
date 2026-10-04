/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

let gameState = "title";

let you = undefined;
let mene = undefined;
let orca = undefined;
let shrimp = undefined;
let beluga = undefined;
let titleScreen = undefined;
let bkg = undefined;

let player = {
    y: 300,
    x: 850
}

let meneImage = {
    y: 0,
    x: 100,
    velocity: 4

}

let shrimpImage = {
    y: 0,
    x: 100,
    velocity: 3
}

"use strict";

//loading the image of the player (fish)
async function preload() {
    you = await loadImage("./images/groper.png");
    mene = await loadImage("./images/mene.png");
    shrimp = await loadImage("./images/shrimp.png");
    titleScreen = await loadImage("./images/bkg.png");
    bkg = await loadImage("./images/ingameBKG.png");
}



/**
 * creates canvas
*/
async function setup() {
    createCanvas(1080, 800);
    await preload();
    meneImage.y = random(0, height - mene.height * 0.2);
    shrimpImage.y = random(0, height - shrimp.height * 0.2);
}


/**
 * draws the ocean, the fish, the background
*/
function draw() {

    if (gameState === "title") {
        image(titleScreen, 0, 0, width, height);
        textAlign(CENTER, CENTER);
        textSize(50);
        text("Ocean domination", width / 2, height / 2 - 30);
        textSize(30);
        text("Press space to start", width / 2, height / 2 + 25);

        image(you, width / 2, height / 2 + 30)
        return;
    }

    if (gameState === "playing") {
        image(bkg, 0, 0, width, height);
    } else {
        return;
    }

    image(you, player.x, player.y, you.width * 0.1, you.height * 0.2);
    drawYou();
    drawFoes();
    moveFoes();
}

function keyPressed() {
    if (gameState === "title" && key === " ") {
        gameState = "playing";
    }
}


/**
 * moves the fish up and down only
 */
function drawYou() {

    if (keyIsDown(DOWN_ARROW) === true) { player.y += 5; }
    else if (keyIsDown(UP_ARROW) === true) { player.y -= 5; }
}

/**
 * draws the other fish and sea animals
 */
function drawFoes() {

    //mene
    image(mene, meneImage.x, meneImage.y, mene.width * 0.1, mene.height * 0.2);
    //shrimp
    image(shrimp, shrimpImage.x, shrimpImage.y, shrimp.width * 0.2, shrimp.height * 0.2);
}

/**
 * moves the opponents
 */
function moveFoes() {

    meneImage.x += meneImage.velocity;
    shrimpImage.x += shrimpImage.velocity;

    // if the fish are outside of the canvas they come back at a random y
    if (meneImage.x > width) {
        meneImage.x = -mene.width * 0.1;
        meneImage.y = random(0, height - mene.height * 0.2);
    }

    if (shrimpImage.x > width) {
        shrimpImage.x = -shrimp.width * 0.2;
        shrimpImage.y = random(0, height - shrimp.height * 0.2);
    }
}