/**
 * Ocean domination
 * Justine Cormier
 * 
 * A game where you are a fish, you eat smaller fish and get bigger until you can eat orcas!... 
 * Would've been nice. 
 * 
 * code used a ref: https://editor.p5js.org/pippinbarr/sketches/8NkxcrJsi
 * https://p5js.org/reference/p5/millis/
 * https://editor.p5js.org/pippinbarr/sketches/NLnxtLMat
 * https://editor.p5js.org/pippinbarr/sketches/exJrLtvvU
 */

let gameState = "title";

//relating to millis
let gameStart = 0;
let oneSecond = 1000;

//"you" will just be the image of the player/fish
let you = undefined;
let mene = undefined;
let shrimpImage = undefined;
let titleScreen = undefined;
let bkg = undefined;

let player = {
    y: 300,
    x: 850,
    speed: 5,
    size: 0.8
}

let meneSize = 0.12;
let shrimpSize = 0.25;
let lastSpawned = 0;


//the first mene to spawn, so hes the only one "active" at the start
let mene1 = {
    x: 100,
    y: 0,
    velocity: 4,
    active: true
};

let mene2 = {
    x: 0,
    y: 0,
    velocity: 5,
    active: false,
    w: 1.5
};

//shrimp is the third fish, hell always spawn in this order
let shrimp = {
    x: 0,
    y: 0,
    velocity: 4,
    active: false,
    w: 2
};

let mene4 = {
    x: 0,
    y: 0,
    velocity: 4.5,
    active: false
};

let mene5 = {
    x: 0,
    y: 0,
    velocity: 5,
    active: false,
    w: 2
};


"use strict";

//loading the image of the player (fish)
//had to name shrimp to something other than just "shrimp", or else the computer didnt
//undertsand which shrimp im talking about, since its alreadya  variable at the top
async function preload() {
    mene = await loadImage("./images/mene.png");
    you = await loadImage("./images/groper.png");
    shrimpImage = await loadImage("./images/shrimp.png")
    titleScreen = await loadImage("./images/bkg.png");
    bkg = await loadImage("./images/ingameBKG.png");
}



/**
 * creates canvas
*/
async function setup() {
    createCanvas(1080, 720);
    await preload();
    //where they can appear on the y canvas
    mene1.y = random(0, height - mene.height * meneSize);
    mene2.y = random(0, height - mene.height * meneSize * mene2.w);
    shrimp.y = random(0, height - shrimpImage.height * meneSize * shrimp.w);
    mene4.y = random(0, height - mene.height * meneSize);
    mene5.y = random(0, height - mene.height * meneSize * mene5.w);

}


/**
 * draws the ocean, the fish, the background
*/
function draw() {

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

    if (gameState === "playing") {
        push();
        image(bkg, 0, 0, width, height);

        moveFoes();
        drawFoes();
        image(you, player.x, player.y, you.width * player.size, you.height * player.size);
        drawYou();

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
 * moves the fish up and down only
 */
function drawYou() {

    if (keyIsDown(DOWN_ARROW)) { player.y += player.speed; }
    else if (keyIsDown(UP_ARROW)) { player.y -= player.speed; }

    //keeps fish inside the canvas
    player.y = constrain(player.y, 0, height - you.height * player.size);
}

/**
 * draws the other fish and sea animals
 */
function drawFoes() {

    //makes the height and width adjust to the "size" variable i made
    if (mene1.active) {
        image(mene, mene1.x, mene1.y, mene.width * meneSize, mene.height * meneSize);
    }

    if (mene2.active) {
        image(mene, mene2.x, mene2.y, mene.width * meneSize, mene.height * meneSize * mene2.w);
    }

    if (shrimp.active) {
        image(shrimpImage, shrimp.x, shrimp.y, shrimpImage.width * shrimpSize, shrimpImage.height * meneSize * shrimp.w);
    }

    if (mene4.active) {
        image(mene, mene4.x, mene4.y, mene.width * meneSize, mene.height * meneSize);
    }

    if (mene5.active) {
        image(mene, mene5.x, mene5.y, mene.width * meneSize, mene.height * meneSize * mene5.w);
    }
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
            //80% chance of spawning
            if (random() < 0.8)
            //if it the randomness decides so, it spawns a foe! 
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
}

/**
 * spawns the menes and shrimp
 */
function spawnFoes() {
    if (!mene1.active) {
        //start at the edge of the canvas
        mene1.x = 0
        mene1.y = random(0, height - mene.height * meneSize);
        mene1.active = true;
    } else if (!mene2.active) {
        mene2.x = 0
        mene2.y = random(0, height - mene.height * meneSize * mene2.w);
        mene2.active = true;
    } else if (!shrimp.active) {
        shrimp.x = -shrimpImage.width * shrimpSize;
        shrimp.y = random(0, height - shrimpImage.height * meneSize * shrimp.w);
        shrimp.active = true;
    }
    else if (!mene4.active) {
        mene4.x = 0
        mene4.y = random(0, height - mene.height * meneSize);
        mene4.active = true;

    } else if (!mene5.active) {
        mene5.x = 0
        mene5.y = random(0, height - mene.height * meneSize * mene5.w);
        mene5.active = true;
    }
}
