/**
 * Fortune Cookie (now with arrays)
 * Justine Cormier
 * 
 * Pick a fortune cookie from the cookie jar, have your fortune be read!
 * The fortune is randomized. This is refactored version of one of my conditionals 
 * prototypes. I focused on using arrays, and functions to tie the code together and 
 * reduce repetitiveness.
 * 
 */

"use strict";


let gameState = "jar";

//all the images used
let jarPic = undefined;
let wrapperPic = undefined;
let cookiePic = undefined;

//for the limits of the jar
let jar = undefined;

let wrappers = [];
let pickedWrapper = undefined;

//cookie including text on fortune
let cookieSize = 1.25
let drop = undefined

const cookieFortune = [
    "All your wishes will come true ",
    "Don't do anything outside of your comfort zone",
    "Someone is thinking about you today",
    "Burgundy is your lucky colour of the day",
    "Don't do that thing you've been meaning to do",
    "You've forgotten to do something very important",
    "Your smile lights up the life of everyone around you",
    "Listen to your subconscious",
    "Don't listen to your subconscious",
    "Your phone is begging for you to scroll more",
    "Clear the way for people leaving the train before you enter"
]
//the index for the cookie fortune
let fortuneMessage = 0

jar = {
    y: 80,
    size: 1.2
}


async function preload() {

    jarPic = await loadImage("./assets/images/jar.png");
    wrapperPic = await loadImage("./assets/images/wrapper.png");
    cookiePic = await loadImage("./assets/images/opened-cookie.png");
}

/**
 * draws canvas
*/
async function setup() {
    createCanvas(800, 600);

    await preload();

    //bottom row
    wrappers.push(createWrappers(85, 200, 0.16, 45, cookiePic));
    wrappers.push(createWrappers(0, 220, 0.16, 80, cookiePic));
    wrappers.push(createWrappers(-78, 200, 0.16, 200, cookiePic));
    //middle row, right to left
    wrappers.push(createWrappers(85, 140, 0.165, 290, cookiePic));
    wrappers.push(createWrappers(10, 145, 0.165, 150, cookiePic));
    wrappers.push(createWrappers(-78, 130, 0.16, 70, cookiePic));
    //top row, right to left
    wrappers.push(createWrappers(88, 55, 0.165, 20, cookiePic));
    wrappers.push(createWrappers(0, 50, 0.165, 110, cookiePic));
    wrappers.push(createWrappers(-78, 50, 0.155, 210, cookiePic));

}

function createWrappers(x, y, size, angle, image) {
    // return [
    //these are all placed in the center of the image, the x and y are just + from that spot
    //from right to left, then up, right to left

    let wrapper = {
        x: x,
        y: y,
        size: size,
        angle: angle,
        image: image
    };
    return wrapper;
}


/**
 * draws cookie jar with fortune cookies
*/
function draw() {
    background("#952e1b");
    drawJar();
    drawWrappers();
    drawText();

    if (gameState === "dragging") {
        mouseDragged();
    }
    else if (gameState === "fortune") {
        drawFortune();
    }
}

/**
 * draws the jar
 */
function drawJar() {
    push()
    tint(100, 100, 255, 200);
    imageMode(CENTER);
    image(jarPic, width / 2, height / 2 + jar.y, jarPic.width * jar.size, jarPic.height * jar.size);
    pop();
}

/**
 * draws the wrappers inside the jar, to be pulled out
 */

function drawWrappers() {
    //sets the angle of rotation to degrees
    angleMode(DEGREES);
    //sets tint to blue-ish hue to all of the cookies
    tint(170, 170, 255, 210);
    //makes the image (before the rotation) in the center
    imageMode(CENTER);

    //all the wrappers in jar using their position, rotation, and size
    for (let cookieWrapper of wrappers) {
        push();
        translate(width / 2 + cookieWrapper.x, height / 2 + cookieWrapper.y, 0);
        rotate(cookieWrapper.angle);
        image(wrapperPic, 0, 0, wrapperPic.width * cookieWrapper.size, wrapperPic.height * cookieWrapper.size);
        pop();
    }

}

/**
 * draws the text over the jar, only when you see the jar (not when fortune is read)
 */
function drawText() {
    //write the text at the top 
    if (gameState === "jar") {
        push();
        textAlign(CENTER, TOP);
        textSize(25);
        textStyle(BOLD)
        textFont('Verdana');
        fill("#141414");
        text("Drag a cookie from the jar", width / 2, 20);
        pop();
    }
}

// /**
//  * draws the fortune gamestate, after choosing a cookie (letting go of the mouse drag)
//  */

function drawFortune() {
    //make bkg darker when you picked fortune/opened cookie
    push();
    background(125, 10, 10)
    pop();
    push();
    tint(200, 200, 255);
    imageMode(CENTER);
    image(cookiePic, width / 2, height / 2, cookiePic.width * cookieSize, cookiePic.height * cookieSize);
    pop();

    //fortune format
    push();
    angleMode(DEGREES)
    translate(width / 4 - 40, height / 4 - 125)
    rotate(-4)
    textFont('Verdana')
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(18.5);
    fill(150, 60, 60);
    text(drop, 150, 140, 340, 200);
    pop();
}

/**
 * when you press down using your mouse on jar, it spawns a cookie on your mousex mousey
 */
function mousePressed() {
    if (gameState === "fortune") {
        //if you click your mouse on the fortune screen, it brings you back to the jar
        gameState = "jar";
        return;
    }
    // Only start a new cookie drag from the jar's initial state.
    if (gameState !== "jar") {
        return;
    }

    // if all of the above are true, the mouse clicked inside the jar
    if (checkOverlap()) {
        pickedWrapper = {
            x: mouseX,
            y: mouseY,
            size: 0.16,
        };
        gameState = "dragging";
    }
}

/**
 * checks the overlap of the jar with the user mouse
 */
function checkOverlap() {
    //where the jar is
    //new const for this section only
    //jar is in the middle
    const jarX = width / 2;
    const jarY = height / 2 + jar.y;
    //the jars size stays adjustable
    const jarWidth = jarPic.width * jar.size;
    const jarHeight = jarPic.height * jar.size;

    // hitbox, check if the mouse is inside the jars area, so all 4 sides
    let overJar = (
        //checking if the mouse is to the right of the jar's left side
        mouseX >= jarX - jarWidth / 2 &&
        // mouse to the left of the jar's right side
        mouseX <= jarX + jarWidth / 2 &&
        // mouse below the jar's top side
        mouseY >= jarY - jarHeight / 2 &&
        // mouse above the jar's bottom side
        mouseY <= jarY + jarHeight / 2
    ); return overJar
}

/**
 * dragging function to drag the cookie
 */
function mouseDragged() {
    // draws and moves the wrapper only while it is being dragged.
    if (gameState === "dragging") {
        pickedWrapper.x = mouseX;
        pickedWrapper.y = mouseY;
        //the wrapper you drag out
        push();
        tint(170, 170, 255, 210);
        imageMode(CENTER);
        translate(pickedWrapper.x, pickedWrapper.y);
        image(wrapperPic, 0, 0, wrapperPic.width * pickedWrapper.size, wrapperPic.height * pickedWrapper.size);
        pop();
    }
}

/**
 * FORTUNES---function for state change when you release the click, the wrapper switches from wrapper to fortune
 * 
 */
function mouseReleased() {
    // opening the wrapper changes from wrapper to opened cookie
    if (gameState === "dragging") {
        const fortuneRoll = random();
        //to keep the probabilities the same as in the original prototype
        const fortuneChances = [0.11, 0.21, 0.31, 0.41, 0.51, 0.61, 0.71, 0.81, 0.89, 0.91];

        let index = cookieFortune.length - 1;

        for (let fortuneIndex = 0; fortuneIndex < fortuneChances.length; fortuneIndex++) {
            if (fortuneRoll < fortuneChances[fortuneIndex]) {
                index = fortuneIndex;
                break;
            }
        }

        drop = cookieFortune[index];

        gameState = "fortune";
    }
}