/**
 * Ocean domination
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * 
 * code used a ref: https://editor.p5js.org/pippinbarr/sketches/8NkxcrJsi
 * https://p5js.org/reference/p5/millis/
 * https://editor.p5js.org/pippinbarr/sketches/NLnxtLMat
 * https://editor.p5js.org/pippinbarr/sketches/exJrLtvvU
 */
// put the gameState to playing while i work on it
let gameState = "title";

let you = undefined;
let mene = undefined;
let titleScreen = undefined;
let bkg = undefined;

let player = {
    y: 300,
    x: 850,
    speed: 5,
    size: 0.6
}

let meneSize = 0.12;
let oneSecond = 1000
let lastMeneSpawn = 0;

//the first mene to spawn, so hes "active"
let mene1 = {
    x: 100,
    y: 0,
    velocity: 4,
    active: true
};

let mene2 = {
    x: 0,
    y: 0,
    velocity: 4,
    active: false
};

let mene3 = {
    x: 0,
    y: 0,
    velocity: 4,
    active: false
};


"use strict";

//loading the image of the player (fish)
async function preload() {
    mene = await loadImage("./images/mene.png");
    you = await loadImage("./images/groper.png");
    titleScreen = await loadImage("./images/bkg.png");
    bkg = await loadImage("./images/ingameBKG.png");
}



/**
 * creates canvas
*/
async function setup() {
    createCanvas(1080, 800);
    await preload();
    mene1.y = random(0, height - mene.height * meneSize * 2);
    mene2.y = random(0, height - mene.height * meneSize * 2);
    mene3.y = random(0, height - mene.height * meneSize * 2);

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
        text("Use the UP and DOWN arrows to move", width / 2, height / 2 + 5);
        text("Click to start", width / 2, height / 2 + 55);

        image(you, width / 2, height / 2 + 60)
        return;
    }

    if (gameState === "playing") {
        image(bkg, 0, 0, width, height);

        moveMene();
        image(you, player.x, player.y, you.width * player.size, you.height * player.size);
        drawMene();
        drawYou();
    } else {
        return;
    }
}

//start the game when you click on the screen
function mouseClicked() {
    if (gameState === "title") {
        gameState = "playing";
    }
}


/**
 * moves the fish up and down only
 */
function drawYou() {

    if (keyIsDown(DOWN_ARROW)) { player.y += player.speed; }
    else if (keyIsDown(UP_ARROW)) { player.y -= player.speed; }

    //keeps fish inside the canvas
    player.y = constrain(player.y, 0, height - player.size);
}

/**
 * draws the other fish and sea animals
 */
function drawMene() {

    if (mene1.active) {
        image(mene, mene1.x, mene1.y, mene.width * meneSize, mene.height * meneSize * 2);
    }

    if (mene2.active) {
        image(mene, mene2.x, mene2.y, mene.width * meneSize, mene.height * meneSize * 2);
    }

    if (mene3.active) {
        image(mene, mene3.x, mene3.y, mene.width * meneSize, mene.height * meneSize * 2);
    }
}



/**
 * moves and spawns the mene
 */
function moveMene() {
    //millis is the milliseconds since the sketch started running
    if (gameState === "playing") {
        //if theres been a spawn that spawned 1 second ago, generate another spawn
        if (millis() - lastMeneSpawn >= oneSecond) {
            lastMeneSpawn = millis();
            //30% of the time
            if (random() < 0.5) {
                spawnMene();
            }
        }
    }

    if (mene1.active) {
        mene1.x += mene1.velocity;
        //if the mene goes outside of the canvas, he disappears
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

/**
 * spawns the mene
 */
function spawnMene() {
    if (!mene1.active) {
        //start at the edge of the canvas
        mene1.x = 0
        //appears anywhere on the y canvas, except it doesnt get its own size cut out
        mene1.y = random(0, height - meneSize);
        mene1.active = true;
    } else if (!mene2.active) {
        mene2.x = 0
        mene2.y = random(0, height - meneSize);
        mene2.active = true;
    } else if (!mene3.active) {
        mene3.x = 0
        mene3.y = random(0, height - meneSize);
        mene3.active = true;
    }
}
