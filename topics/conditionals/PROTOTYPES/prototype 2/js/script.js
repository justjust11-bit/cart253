/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * 
 * refs used: https://p5js.org/reference/p5/imageMode/
 * https://p5js.org/reference/p5/rotate/
 * https://p5js.org/reference/p5/translate/
 */

"use strict";

let jarPic = undefined;
let wrapperPic = undefined;
let cookiePic = undefined;

let jar = undefined;
let wrapper = undefined;



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
        y: 90,
        size: 1.1
    }

    wrapper = {
        one: {
            x: 90,
            y: 200,
            size: 0.15
        },
        two: {
            x: 0,
            y: 0,
            size: 0.15
        },

        three: {
            x: 0,
            y: 100,
            size: 0.15
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
    // drawFortune();



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
    tint(170, 170, 255, 210);

    //first wrapper
    push();
    imageMode(CENTER);
    //dividing by two using TRANSLATE, moves the origin point of the wrapper to the center of the page
    //so that the rotate function can make the wrapper rotate on itself
    translate(width / 2 + wrapper.one.x, height / 2 + wrapper.one.y, 0)
    rotate(45)
    //x and y are left at 0 because they are variables on translate
    image(wrapperPic, 0, 0, wrapperPic.width * wrapper.one.size, wrapperPic.height * wrapper.one.size)
    pop();

    //second wrapper
    push();
    imageMode(CENTER);
    translate(width / 2 + wrapper.two.x, height / 2 + wrapper.two.y, 0)
    rotate(60)
    image(wrapperPic, 0, 0, wrapperPic.width * wrapper.two.size, wrapperPic.height * wrapper.two.size)
    pop();

    //third wrapper
    push();
    imageMode(CENTER);
    translate(width / 2 + wrapper.three.x, height / 2 + wrapper.three.y, 0)
    rotate(60)
    image(wrapperPic, 0, 0, wrapperPic.width * wrapper.three.size, wrapperPic.height * wrapper.three.size)
    pop();


}

// /**
//  * draws the fortune after choosing a cookie
//  */

//function drawFortune() {


// }
