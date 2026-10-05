/**
 * Ocean domination
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * 
 * code used a ref: https://editor.p5js.org/pippinbarr/sketches/8NkxcrJsi
 * https://p5js.org/reference/p5/millis/
 */
// put the gameState to playing while i work on it
let gameState = "playing";

let you = undefined;
let mene = undefined;
let orca = undefined;
let shrimp = undefined;
let beluga = undefined;
let titleScreen = undefined;
let bkg = undefined;

let player = {
    y: 300,
    x: 850,
    speed: 5
}

let oneSecond = 1000

let mene1 = { x: 100, y: 0, velocity: 4, active: true };
let mene2 = { x: 0, y: 0, velocity: 4, active: false };
let mene3 = { x: 0, y: 0, velocity: 4, active: false };
let shrimp1 = { x: 100, y: 0, velocity: 3, active: true };
let shrimp2 = { x: 0, y: 0, velocity: 3, active: false };
let shrimp3 = { x: 0, y: 0, velocity: 3, active: false };
let lastFoeSpawn = 0;

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
    mene1.y = random(0, height - mene.height * 0.2);
    mene2.y = random(0, height - mene.height * 0.2);
    mene3.y = random(0, height - mene.height * 0.2);
    shrimp1.y = random(0, height - shrimp.height * 0.2);
    shrimp2.y = random(0, height - shrimp.height * 0.2);
    shrimp3.y = random(0, height - shrimp.height * 0.2);
}


/**
 * draws the ocean, the fish, the background
*/
function draw() {

    if (gameState === "title") {
        image(titleScreen, 0, 0, width, height);
        fill("#a18f8f")
        textAlign(CENTER, CENTER);
        textSize(60);
        textFont('Verdana')
        text("Ocean domination", width / 2, height / 2 - 80);
        textSize(30);
        text("Use the up and down arrows to move", width / 2, height / 2 + 5);
        text("Press space to start", width / 2, height / 2 + 35);

        image(you, width / 2, height / 2 + 60)
        return;
    }

    if (gameState === "playing") {
        image(bkg, 0, 0, width, height);
        image(you, player.x, player.y, you.width * 0.13, you.height * 0.13);
    } else {
        return;
    }


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

    if (keyIsDown(DOWN_ARROW) === true) { player.y += player.speed; }
    else if (keyIsDown(UP_ARROW) === true) { player.y -= player.speed; }
}

/**
 * draws the other fish and sea animals
 */
function drawFoes() {

    if (mene1.active) {
        image(mene, mene1.x, mene1.y, mene.width * 0.1, mene.height * 0.2);
    }

    if (mene2.active) {
        image(mene, mene2.x, mene2.y, mene.width * 0.1, mene.height * 0.2);
    }

    if (mene3.active) {
        image(mene, mene3.x, mene3.y, mene.width * 0.1, mene.height * 0.2);
    }
}



/**
 * moves the opponents
 */
function moveFoes() {

    //millis is the milliseconds since the sketch started running
    if (gameState === "playing") {
        //if theres been a spawn that spawned 1 second ago, generate another spawn
        if (millis() - lastFoeSpawn >= oneSecond) {
            lastFoeSpawn = millis();
            if (random() < 0.5) {
                spawnMene();
            }
        }
    }

    moveMene();
}

/**
 * spawns the mene
 */
function spawnMene() {
    if (!mene1.active) {
        mene1.x = -mene.width * 0.1;
        mene1.y = random(0, height - mene.height * 0.2);
        mene1.active = true;
    } else if (!mene2.active) {
        mene2.x = -mene.width * 0.1;
        mene2.y = random(0, height - mene.height * 0.2);
        mene2.active = true;
    } else if (!mene3.active) {
        mene3.x = -mene.width * 0.1;
        mene3.y = random(0, height - mene.height * 0.2);
        mene3.active = true;
    }
}

/**
 * moves the mene
 */

function moveMene() {
    if (mene1.active) {
        mene1.x += mene1.velocity;
        if (mene1.x > width) {
            mene1.active = false;
        }
    }

    if (mene2.active) {
        mene2.x += mene2.velocity;
        if (mene2.x > width) {
            mene2.active = false;
        }
    }

    if (mene3.active) {
        mene3.x += mene3.velocity;
        if (mene3.x > width) {
            mene3.active = false;
        }
    }
}