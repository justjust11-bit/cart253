/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * 
 * refs used: https://p5js.org/reference/p5/imageMode/
 */

"use strict";

let jarPic = undefined;
let wrapperPic = undefined;
let cookiePic = undefined;

let jar = undefined;



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
    
}


/**
 * draws cookie jar with fortune cookies
*/
function draw() {
    background("#952e1b");

    drawJar();
    // drawWrappers();
    // drawFortune();



}


/**
 * draws the jar
 */
function drawJar() {
    tint(100,100,255,200)
    
    imageMode(CENTER);
    image(jarPic, width/2, height/2+jar.y, jarPic.width*jar.size, jarPic.height*jar.size)
}

/**
 * draws the wrappers inside the jar, to be pulled out
 */

// function drawWrappers() {

   

// }

// /**
//  * draws the fortune after choosing a cookie
//  */

//function drawFortune() {


// }
