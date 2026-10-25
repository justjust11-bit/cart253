/**
 * Ocean domination Refactored
 * Justine Cormier
 * 
 * ((I refactored my prototype from the conditionals prototypes. The prototype runs exactly
 * the same, but the code uses functions to make the code less cluttered.))
 * A game where you are a fish, you eat smaller fish and get bigger until you can eat orcas!... 
 * Would've been nice. 
 * The fish keep coming, but you can't interact with a single one.
 * Maybe you're the one being dominated by the ocean.
 * 
 */

//game starts on the title screen
let gameState = "title";

//relating to millis - when the game starts, 0 seconds passed, 1 second is 1000
let gameStart = 0;
let oneSecond = 1000;

//"you" will just be the image of the player/fish
//below are all the pngs used
let you = undefined;
let meneImage = undefined;
let shrimpImage = undefined;
let titleScreen = undefined;
let bkg = undefined;
//


let player = {
    y: 300,
    x: 850,
    speed: 5,
    size: 0.8
}

let meneSize = 0.12;
let shrimpSize = 0.14;
let lastSpawned = 0;


"use strict";

//loading the image of the player (fish)
//had to name shrimp to something other than just "shrimp", or else the computer didnt
//undertsand which shrimp im talking about, since its alreadya  variable at the top
async function preload() {
    meneImage = await loadImage("./assets/images/mene.png");
    you = await loadImage("./assets/images/groper.png");
    shrimpImage = await loadImage("./assets/images/shrimp.png");
    titleScreen = await loadImage("./assets/images/bkg.png");
    bkg = await loadImage("./assets/images/ingameBKG.png");
}


/**
 * creates canvas
*/
async function setup() {
    createCanvas(1080, 720);
    await preload();
    //where they can appear on the y canvas
    //the ones with .w are ones i played around with the size at the top
    mene1 = createFoes(100, random(0, height - meneImage.height * meneSize), 1, meneSize, 4, meneImage, true);
    mene2 = createFoes(0, random(0, height - meneImage.height * meneSize), 1.5, meneSize, 5, meneImage, false);
    shrimp = createFoes(0, random(0, height - shrimpImage.height * shrimpSize), 2, shrimpSize, 4, shrimpImage, false); //there is no mene3
    mene4 = createFoes(0, random(0, height - meneImage.height * meneSize), 1, meneSize, 4.5, meneImage, false);
    mene5 = createFoes(0, random(0, height - meneImage.height * meneSize), 2, meneSize, 5, meneImage, false);
    mene6 = createFoes(0, random(0, height - meneImage.height * meneSize), 1.5, meneSize, 3, meneImage, false);


}

/**
 * 
 *creates the foes, sets their variables that are specified in function setup
 */
function createFoes(x, y, w, size, velocity, image, active) {
    let foe = {
        x: x,
        y: y,
        w: w,
        size: size,
        velocity: velocity,
        image: image,
        active: active,

    };
    return foe;
}


/**
 * draws the ocean, the fish, the background
*/
function draw() {
    drawTitleScreen();
    drawGamePlay();
}

/**draws the title screen
 * 
 */
function drawTitleScreen() {
    if (gameState === "title") {
        push();
        image(titleScreen, 0, 0, width, height);
        fill("#c4b5b5")
        textAlign(CENTER, CENTER);
        textSize(60);
        textFont('Verdana')
        text("Ocean domination", width / 2, height / 2 - 80);
        textSize(30);
        text("Use the UP and DOWN arrows to move", width / 2, height / 2 + 5);
        text("Click to start", width / 2, height / 2 + 55);
        image(you, width / 2, height / 2 + 60)
        pop();

        return;
    }
}

/**
 * draws the gameplay screen, and text that appears as the game goes on
 */
function drawGamePlay() {
    if (gameState === "playing") {
        push();
        image(bkg, 0, 0, width, height);

        moveFoes();
        drawFoes();
        //loads the image of the player
        image(you, player.x, player.y, you.width * player.size, you.height * player.size);
        // calls the movement the image of the player aka the fish
        moveYou();

        //text 6 seconds after start, after player has tried eating around 2 fish, and realized it doesnt work
        //second text to appear
        if (millis() - gameStart >= oneSecond * 18) {
            push();
            fill("#f5ecec")
            textSize(50);
            textFont('Verdana')
            text("You can keep pretending", 180, 600);

            //first text to appear
        } else if (millis() - gameStart >= oneSecond * 6) {
            fill("#f5ecec")
            textSize(50);
            textFont('Verdana')
            text("If only you could really eat them...", 120, 100);
        }
        pop();
    } else {
        return;
    }
}

/**
 * starts the game when you click on the screen
 */

function mouseClicked() {
    if (gameState === "title") {
        gameState = "playing";
        gameStart = millis();
    }
}


/**
 * moves your fish up and down only
 */
function moveYou() {

    if (keyIsDown(DOWN_ARROW)) { player.y += player.speed; }
    else if (keyIsDown(UP_ARROW)) { player.y -= player.speed; }

    //keeps fish inside the canvas (but the bottom and top of his body can get cut off)
    player.y = constrain(player.y, -45, height - you.height * player.size * 0.5);
}

/**
 * 
 * sets the image and its size to each foe. this will be called in drawFoes
 */
function drawFoe(foe) {
    if (foe.active) {
        image(
            foe.image,
            foe.x,
            foe.y,
            foe.image.width * foe.size * foe.w,
            foe.image.height * foe.size * foe.w
        );
    }
}
/**
 * draws the foes according to how drawFoe draws them, and sends that ingo to the variables
 * in draw
 */
function drawFoes() {

    //takes the info from drawFoe and puts it onto the variables mene, shrimp
    drawFoe(mene1);
    drawFoe(mene2);
    drawFoe(shrimp);
    drawFoe(mene4);
    drawFoe(mene5);
    drawFoe(mene6);

}

/**
 * moves and respawns the menes and shrimp
 */
function moveFoes() {
    //millis is the milliseconds since the sketch started running
    if (gameState === "playing") {
        //if theres been a spawn that spawned 1 second ago, generate another spawn
        //so it looks like its looping but it just keeps spawning
        if (millis() - lastSpawned >= oneSecond) {
            lastSpawned = millis();
            {
                spawnFoes();
            }
        }
    }

    if (mene1.active) {
        //movement
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

    if (shrimp.active) {
        shrimp.x += shrimp.velocity;
        if (shrimp.x > width) {
            shrimp.active = false;
        }
    }

    if (mene4.active) {
        mene4.x += mene4.velocity;
        if (mene4.x > width) {
            mene4.active = false;
        }
    }

    if (mene5.active) {
        mene5.x += mene5.velocity;
        if (mene5.x > width) {
            mene5.active = false;
        }

    }

    if (mene6.active) {
        mene6.x += mene6.velocity;
        if (mene6.x > width) {
            mene6.active = false;
        }

    }
}

/**
 * spawns the menes and shrimp
 */
function spawnFoes() {
    if (!mene1.active) {
        //tracking the x here makes the loop possible in movefoes
        mene1.x = -mene1.image.width * mene1.size * mene1.w;
        mene1.active = true;

    } else if (!mene2.active) {
        mene2.x = -mene1.image.width * mene2.size * mene2.w;
        mene2.active = true;
    }

    else if (!shrimp.active) {
        shrimp.x = -shrimpImage.width * shrimpSize;
        shrimp.active = true;
    }

    else if (!mene4.active) {
        mene4.x = -mene4.image.width * mene4.size * mene4.w;
        mene4.active = true;
    }
    else if (!mene5.active) {
        mene5.x = -mene5.image.width * mene5.size * mene5.w;
        mene5.active = true
    }
    else if (!mene6.active) {
        mene6.x = -mene6.image.width * mene6.size * mene6.w;
        mene6.active = true;
    }
}