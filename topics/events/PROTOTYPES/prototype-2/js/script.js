/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let grass = undefined;
let grassBlades = undefined;
let sky = undefined;
let flower = undefined;
let flowers = undefined;
let cloud = undefined;
let bunny = undefined;
let fox = undefined;
let log = undefined;
let leaves = undefined;
let wood = undefined;
let door = undefined;
let water = undefined;
let heart = undefined;


/**
 * preloads images
 */
async function preload() {
    grass = await loadImage("./assets/images/");
    grassBlades = await loadImage("./assets/images/");
    sky = await loadImage("./assets/images/");
    flower = await loadImage("./assets/images/");
    flowers = await loadImage("./assets/images/");
    cloud = await loadImage("./assets/images/");
    bunny = await loadImage("./assets/images/");
    fox = await loadImage("./assets/images/");
    log = await loadImage("./assets/images/");
    leaves = await loadImage("./assets/images/");
    wood = await loadImage("./assets/images/");
    door = await loadImage("./assets/images/");
    water = await loadImage("./assets/images/");
    heart = await loadImage("./assets/images/");
}



/**
 * creates canvas
*/
async function setup() {
    createCanvas(1080, 800)
    background("#e0d4c8")
    await preload();

}


/**
 * draws the hotbar,(ETC ADD MORE LATER)
*/
function draw() {

    drawHotbar();
    drawStamps();

}

/**
 * draws the hotbar
 */

function drawHotbar() {

    //hotbars outline (white for now)
    push();
    fill("#b5a4a4")
    stroke("#5b291c")
    strokeWeight(10)
    rect(0, 0, 220, 800, 10)
    pop();

    //hotbars line that separates in the middle
    push();
    stroke("#5b291c")
    strokeWeight(3)
    line(110, 0, 110, 800)
    pop();
}

/**
 * draws the stamps
 */
function drawStamps() {


}