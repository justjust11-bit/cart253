/**
 * Fortune Cookie
 * Justine Cormier
 * 
 * Pick a fortune cookie from the cookie jar, have your fortune 
 * be read!
 * 
 * refs used: https://p5js.org/reference/p5/imageMode/
 * https://p5js.org/reference/p5/rotate/
 * https://p5js.org/reference/p5/translate/
 * https://p5js.org/reference/p5/mousePressed/
 * https://p5js.org/reference/p5/mouseDragged/
 * https://editor.p5js.org/pippinbarr/sketches/5hnVN-_C0
 * https://editor.p5js.org/pippinbarr/sketches/8NkxcrJsi
 */

"use strict";


let gameState = "jar";

let jarPic = undefined;
let wrapperPic = undefined;
let cookiePic = undefined;

let jar = undefined;
let wrapper = undefined;
let pickedWrapper = undefined;

//cookie including text on fortune
let cookieSize = 1.25
let drop = undefined



async function preload() {

    jarPic = await loadImage("./images/jar.png");
    wrapperPic = await loadImage("./images/wrapper.png");
    cookiePic = await loadImage("./images/opened-cookie.png");
}




/**
 * draws canvas
*/
async function setup() {
    createCanvas(800, 600);

    await preload();



    jar = {
        y: 80,
        size: 1.2
    }

    wrapper = {
        //these are all placed in the center of the image, the x and y are just + from that spot
        //from right to left, then up, right to left

        //bottom row
        one: {
            x: 85,
            y: 200,
            size: 0.16,
            angle: 45
        },
        two: {
            x: 0,
            y: 220,
            size: 0.16,
            angle: 80
        },

        three: {
            x: -78,
            y: 200,
            size: 0.16,
            angle: 200
        },
        //middle row, right to left
        four: {
            x: 85,
            y: 140,
            size: 0.165,
            angle: 290
        },

        five: {
            x: 10,
            y: 145,
            size: 0.165,
            angle: 150
        },

        six: {
            x: -78,
            y: 130,
            size: 0.16,
            angle: 70
        },

        //top row, right to left
        seven: {
            x: 88,
            y: 55,
            size: 0.165,
            angle: 20
        },

        eight: {
            x: 0,
            y: 50,
            size: 0.165,
            angle: 110
        },

        nine: {
            x: -78,
            y: 50,
            size: 0.155,
            angle: 210
        }
    }


}


/**
 * draws cookie jar with fortune cookies
*/
function draw() {
    background("#952e1b");

    drawJar();
    drawWrappers();

    if (gameState === "dragging") {
        mouseDragged();
    }
    else if (gameState === "fortune") {
        drawFortune();
    }

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

    //first wrapper
    push();
    //dividing by two using TRANSLATE, moves the origin point of the wrapper to the center of the page
    //so that the rotate function can make the wrapper rotate on itself
    translate(width / 2 + wrapper.one.x, height / 2 + wrapper.one.y, 0)
    rotate(wrapper.one.angle)
    //x and y are left at 0 because they are variables on translate
    image(wrapperPic, 0, 0, wrapperPic.width * wrapper.one.size, wrapperPic.height * wrapper.one.size)
    pop();

    //second wrapper
    push();
    translate(width / 2 + wrapper.two.x, height / 2 + wrapper.two.y, 0)
    rotate(wrapper.two.angle)
    image(wrapperPic, 0, 0, wrapperPic.width * wrapper.two.size, wrapperPic.height * wrapper.two.size)
    pop();

    //third wrapper
    push();
    translate(width / 2 + wrapper.three.x, height / 2 + wrapper.three.y, 0)
    rotate(wrapper.three.angle)
    image(wrapperPic, 0, 0, wrapperPic.width * wrapper.three.size, wrapperPic.height * wrapper.three.size)
    pop();

    //fourth wrapper
    push();
    translate(width / 2 + wrapper.four.x, height / 2 + wrapper.four.y, 0)
    rotate(wrapper.four.angle)
    image(wrapperPic, 0, 0, wrapperPic.width * wrapper.four.size, wrapperPic.height * wrapper.four.size)
    pop();

    //fifth wrapper
    push();
    translate(width / 2 + wrapper.five.x, height / 2 + wrapper.five.y, 0)
    rotate(wrapper.five.angle)
    image(wrapperPic, 0, 0, wrapperPic.width * wrapper.five.size, wrapperPic.height * wrapper.five.size)
    pop();

    //sixth wrapper
    push();
    translate(width / 2 + wrapper.six.x, height / 2 + wrapper.six.y, 0)
    rotate(wrapper.six.angle)
    image(wrapperPic, 0, 0, wrapperPic.width * wrapper.six.size, wrapperPic.height * wrapper.six.size)
    pop();

    //seventh wrapper
    push();
    translate(width / 2 + wrapper.seven.x, height / 2 + wrapper.seven.y, 0)
    rotate(wrapper.seven.angle)
    image(wrapperPic, 0, 0, wrapperPic.width * wrapper.seven.size, wrapperPic.height * wrapper.seven.size)
    pop();

    //eigth wrapper
    push();
    translate(width / 2 + wrapper.eight.x, height / 2 + wrapper.eight.y, 0)
    rotate(wrapper.eight.angle)
    image(wrapperPic, 0, 0, wrapperPic.width * wrapper.eight.size, wrapperPic.height * wrapper.eight.size)
    pop();

    //ninth wrapper
    push();
    translate(width / 2 + wrapper.nine.x, height / 2 + wrapper.nine.y, 0)
    rotate(wrapper.nine.angle)
    image(wrapperPic, 0, 0, wrapperPic.width * wrapper.nine.size, wrapperPic.height * wrapper.nine.size)
    pop();


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
    text(drop, 150, 140, 349, 200);
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

    //where the jar is
    //new const for this section only
    //jar is in the middle
    const jarX = width / 2;
    const jarY = height / 2 + jar.y;
    //the jars size stays adjustable
    const jarWidth = jarPic.width * jar.size;
    const jarHeight = jarPic.height * jar.size;

    // hitbox, check if the mouse is inside the jars area, so all 4 sides
    const overJar = (
        //checking if the mouse is to the right of the jar's left side
        mouseX >= jarX - jarWidth / 2 &&
        // mouse to the left of the jar's right side
        mouseX <= jarX + jarWidth / 2 &&
        // mouse below the jar's top side
        mouseY >= jarY - jarHeight / 2 &&
        // mouse above the jar's bottom side
        mouseY <= jarY + jarHeight / 2
    );

    // if all of the above are true, the mouse clicked inside the jar

    if (overJar) {
        pickedWrapper = {
            x: mouseX,
            y: mouseY,
            size: 0.16,
        };
        gameState = "dragging";
    }
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

        if (fortuneRoll < 0.11) {
            drop = "All your wishes will come true ";
        }
        else if (fortuneRoll < 0.21) {
            drop = "Don't do anything outside of your comfort zone";
        }
        else if (fortuneRoll < 0.31) {
            drop = "Someone is thinking about you today";
        }
        else if (fortuneRoll < 0.41) {
            drop = "Burgundy is your lucky colour of the day";
        }
        else if (fortuneRoll < 0.51) {
            drop = "Don't do that thing you've been meaning to do";
        }
        else if (fortuneRoll < 0.61) {
            drop = "You've forgotten to do something very important";
        }
        else if (fortuneRoll < 0.71) {
            drop = "Your smile lights up the life of everyone around you";
        }
        else if (fortuneRoll < 0.81) {
            drop = "Listen to your subconscious";
        }
        else if (fortuneRoll < 0.89) {
            drop = "Don't listen to your subconscious";
        }
        else if (fortuneRoll < 0.91) {
            drop = "Your phone is begging for you to scroll more";
        }
        else {
            drop = "Clear the way for people leaving the train before you enter";
        }

        gameState = "fortune";
    }
}
