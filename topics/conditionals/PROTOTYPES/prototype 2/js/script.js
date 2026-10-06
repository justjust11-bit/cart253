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
//  * draws the fortune after choosing a cookie
//  */

//function drawFortune() {


// }
