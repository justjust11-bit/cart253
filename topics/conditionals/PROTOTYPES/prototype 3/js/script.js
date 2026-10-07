/**
 * Three Shy Clowns
 * Justine Cormier
 * 
 * They only want to appear if directly called at. They also dont want to be on the screen
 * at the same time as the others. Click on the holes until you find your favourite tone and size.
 * 
 * 
 * refs used: https://editor.p5js.org/pippinbarr/sketches/NLnxtLMat
 * https://p5js.org/reference/p5/random/
 * https://p5js.org/reference/p5/tint/
 * https://p5js.org/reference/p5/noTint/
 * and my previous prototypes
 */

"use strict";

//images
let clown = undefined;
let wood = undefined;

let clownHole = 0;
//the assigned colours names are arbitrary (theyre just
// to make sure every tint is possible)
let clownTintRed = 255;
let clownTintGreen = 255;
let clownTintBlue = 255;
let clownSize = 100;

const hole1 = {
    x: 170,
    y: 320,
    size: 150
}

const hole2 = {
    x: 400,
    y: 320,
    size: 150
}

const hole3 = {
    x: 630,
    y: 320,
    size: 150
}



/**
 * draws canvas
*/
async function setup() {
    createCanvas(800, 600)
    clown = await loadImage("./assets/images/clown.png");
    wood = await loadImage("./assets/images/wood_floor.jpg");
}


/**
 * draws the three holes, wood background and eventually clown
*/
function draw() {
    //the wood background
    imageMode(CORNER);
    noTint();
    image(wood, 0, 0, width, height);

    push();
    fill("white");
    textSize(50)
    textStyle(BOLD);
    textAlign(CENTER, TOP);
    text("Click to make a clown appear", width / 2, 100);
    pop();

    drawHoles();

    //if a clown hole has been clicked
    if (clownHole === 1 || clownHole === 2 || clownHole === 3) {
        push();
        imageMode(CENTER);
        tint(clownTintRed, clownTintGreen, clownTintBlue);

        if (clownHole === 1) {
            image(clown, hole1.x, hole1.y, clownSize, clownSize);
        }

        if (clownHole === 2) {
            image(clown, hole2.x, hole2.y, clownSize, clownSize);
        }
        if (clownHole === 3) {
            image(clown, hole3.x, hole3.y, clownSize, clownSize);
        }
        pop();
    }
}

/**
 * draws holes clowns will come out of
 */
function drawHoles() {

    push();
    fill("#300b0b")
    //holes from left to right
    ellipse(hole1.x, hole1.y, hole1.size)
    ellipse(hole2.x, hole2.y, hole2.size)
    ellipse(hole3.x, hole3.y, hole3.size)

    pop();

}

/**
 * if you click on a circle, a clown appears.
 */
function mouseClicked() {

    //starts off false, so we can only see them if true
    let clickedHole = false;

    //the overlap
    if (dist(mouseX, mouseY, hole1.x, hole1.y) < hole1.size / 2) {
        clownHole = 1;
        clickedHole = true;
    } else if (dist(mouseX, mouseY, hole2.x, hole2.y) < hole2.size / 2) {
        clownHole = 2;
        clickedHole = true;
    } else if (dist(mouseX, mouseY, hole3.x, hole3.y) < hole3.size / 2) {
        clownHole = 3;
        clickedHole = true;
    }

    //the tint of the clown and its size is randomized
    if (clickedHole) {
        clownTintRed = random(255);
        clownTintGreen = random(255);
        clownTintBlue = random(255);
        clownSize = random(10, 200);
    }
}
