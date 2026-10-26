/**
 * Shrinking Shooter
 * Justine
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * https://editor.p5js.org/pippinbarr/sketches/z8cKGbJff
 * https://editor.p5js.org/pippinbarr/sketches/Yc4eMdFyH
 */

"use strict";

let bullet1 = undefined;
let bullet2 = undefined;
let bullet3 = undefined;
let bullet4 = undefined;
let bullet5 = undefined;



let canon = {
    x: 450,
    y: 850,
    size: 100,
    velocity: 0,
    fill: ("black"),
    stroke: ("white"),
    strokes: {
        touched: ("brown"),
        untouched: ("white"),
    },
    fills: {
        touched: ("orange"),
        untouched: ("black")
    },
    destination: {
        x: 450,
        y: 850,
        size: 50
    },
    speed: 4

}




/**
 * creates the canvas
*/
function setup() {
    createCanvas(900, 900)
}


function createBullets(x, y, size, velocity) {
    let bullets = {
        x: x,
        y: y,
        size: size,
        velocity: velocity,
    };
    return bullets;
    // canon.x, canon.y, 50, -5
}



/**
 * draws (-----)
*/
function draw() {
    background("black")


    drawCanon();

    //addings bullet1 = , keeps the identitt of the bullet as it keeps moving
    //so that it can be recharged when it leaves teh screen
    bullet1 = moveBullets(bullet1);
    bullet2 = moveBullets(bullet2);
    bullet3 = moveBullets(bullet3);
    bullet4 = moveBullets(bullet4);
    bullet5 = moveBullets(bullet5);


    drawElement(bullet1);
    drawElement(bullet2);
    drawElement(bullet3);
    drawElement(bullet4);
    drawElement(bullet5);

    bulletsLeft();
    checkOverlap();
    moveCanon();

}

/**
 * draws the canon
 */
function drawCanon() {
    push();
    strokeWeight(20);
    stroke(canon.stroke);
    fill(canon.fill);
    ellipse(canon.x, canon.y, canon.size);
    pop();
}

/**
 * moves the canon right and left, when double clicking
 */
function moveCanon() {
    //check if thedouble click was on the left
    const dx = canon.x - canon.destination.x
    if (dx < -canon.destination.size) {
        //if so move right
        canon.x += canon.speed;

    }
    //check if its to the right of the destination
    else if (dx > canon.destination.size) {
        canon.x -= canon.speed;


    }

}



/** 
 * 
 * draws the bullets
 * 
 */
function drawElement(bullet) {

    //if the bullets are undefined, dont draw
    if (bullet === undefined) {
        return;
    }
    push();
    fill("blue");
    ellipse(bullet.x, bullet.y, bullet.size);
    pop();
}

/**
 * clicking on the mouse while over the cannon lets a bullet loose
 */
function mouseClicked() {
    if (checkOverlap()) {
        shootBullet();
    }
    else {
        // Clicking away from the cannon sets its destination.
        canon.destination.x = mouseX;
    }
}

/**
 * creates a bullet that the canon shoots when you click
 */
function shootBullet() {
    const bulletSize = bulletsLeftCount() * 10;

    if (bullet1 === undefined) {
        bullet1 = createBullets(canon.x, canon.y, bulletSize, -5);
    }
    else if (bullet2 === undefined) {
        bullet2 = createBullets(canon.x, canon.y, bulletSize, -5);
    }
    else if (bullet3 === undefined) {
        bullet3 = createBullets(canon.x, canon.y, bulletSize, -5);
    }
    else if (bullet4 === undefined) {
        bullet4 = createBullets(canon.x, canon.y, bulletSize, -5);
    }
    else if (bullet5 === undefined) {
        bullet5 = createBullets(canon.x, canon.y, bulletSize, -5);
    }
    else {
        return;
    }

    canon.size -= 16;
}

/**
 * moves the bullets
 */
function moveBullets(bullet) {

    //if the bullets are undefined, dont move
    //so they dont move at the very start
    //and they wont move when they go off the canvas
    //because below i mark them as undefined if theyre off canvas
    if (bullet === undefined) {
        return undefined;
    }
    //the bullet goes up the y axis
    bullet.y += bullet.velocity;
    //if the bullet's y is less than 0 aka it is off the screen
    //then the bullet becomes undefined, for the sake of the bullet count going back up
    if (bullet.y < 0) {
        bullet = undefined;
    }

    return bullet;


}


/**
 * calculates how many bullets the canon has left AND has text on top left
 */
function bulletsLeft() {
    const bulletAmount = bulletsLeftCount();

    push();
    fill("white")
    textSize(60)
    text("Bullets left: " + bulletAmount, 50, 50, 300)
    pop();
}

function bulletsLeftCount() {
    let bulletAmount = 0;
    //at the start of the game theyre all undefined, so you will have +1 for each
    if (bullet1 === undefined) bulletAmount += 1;
    if (bullet2 === undefined) bulletAmount += 1;
    if (bullet3 === undefined) bulletAmount += 1;
    if (bullet4 === undefined) bulletAmount += 1;
    if (bullet5 === undefined) bulletAmount += 1;

    return bulletAmount;
}


/** 
 * checks the overlap with the mouse and the canon
 */
function checkOverlap() {
    const d = dist(mouseX, mouseY, canon.x, canon.y);
    const overlap = d < canon.size / 2;

    if (overlap) {
        canon.fill = canon.fills.touched;
        canon.stroke = canon.strokes.touched;
    }
    else {
        canon.fill = canon.fills.untouched;
        canon.stroke = canon.strokes.untouched;
    }
    return overlap;
}
