/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//the stamps you can use on the canvas
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

//the canvas you can draw on
let userCanvas = undefined;

//the stamp you have selected
let selectedStamp = undefined;
//the image of the stamp that will be used to put on the canvas
let stampImage = undefined;
//starts off as unpressed 
let pressedOnStamp = false;


//size of the stamps as you put them on the canvas
const stampSize = 100;


/**
 * preloads images for the stamps
 */
async function preload() {
    grass = await loadImage("./assets/images/grass.png");
    grassBlades = await loadImage("./assets/images/grassBlades.png");
    sky = await loadImage("./assets/images/blue.png");
    flower = await loadImage("./assets/images/flower.png");
    flowers = await loadImage("./assets/images/flowers.png");
    cloud = await loadImage("./assets/images/cloud.png");
    bunny = await loadImage("./assets/images/bunny.png");
    fox = await loadImage("./assets/images/fox.png");
    log = await loadImage("./assets/images/log.png");
    leaves = await loadImage("./assets/images/leaves.png");
    wood = await loadImage("./assets/images/wood.png");
    door = await loadImage("./assets/images/door.png");
    water = await loadImage("./assets/images/water.png");
    heart = await loadImage("./assets/images/heart.png");
}



/**
 * creates canvas
*/
async function setup() {
    createCanvas(1080, 800);
    background("#ded2cb");
    //since i have a user canvas, to make sort of layer, i am 
    //using a p5 object called createGraphics
    stampImage = createGraphics(800, 750);
    await preload();

}


/**
 * creates canvas, draws hotbar, usercanvas, stamps
*/
function draw() {

    drawHotbar();
    drawStamps();
    drawUserCanvas();

}

/**
 * draws the hotbar, where you can pick the stamps from
 */

function drawHotbar() {

    //hotbars background colour
    push();
    fill("#bcaeae")
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
 * draws the users canvas, on the right of the hotbar, where you can draw with
 * the stamps
 */

function drawUserCanvas() {

    push();
    fill("white");
    strokeWeight(0)
    rect(250, 30, 800, 750);

    //draws the stamps that will be stamped later... when the user selected one
    //the x,y, are those of the canvas
    image(stampImage, 250, 30);
    pop();

}


/**
 * loads images that will be used as stamps
 */
function drawStamps() {

    push();
    imageMode(CORNER);
    //GRASS
    //top left
    image(grass, 17, 50, 80, 80);
    //top right
    image(grassBlades, 125, 50, 80, 80);

    //second row, from left to right
    image(sky, 17, 150, 80, 80);
    image(flower, 125, 150, 80, 80);

    // //third row, from left to right
    image(flowers, 17, 250, 80, 80);
    image(cloud, 125, 250, 80, 80);

    // //fourth row
    image(bunny, 17, 350, 80, 80);
    image(fox, 125, 350, 80, 80);

    // //fifth row
    image(log, 17, 450, 80, 80);
    image(leaves, 125, 450, 80, 80);

    // //sixth row
    image(wood, 17, 550, 80, 80);
    image(door, 125, 550, 80, 80);

    // //seventh row
    image(water, 17, 650, 80, 80);
    image(heart, 125, 650, 80, 80);
    pop();

}

/**
 * if the user clicks on a specific stamp on the hotbar,
 * that item becomes "selected"
 */
function mouseClicked() {
    //if the user clicks on the GRASS
    if (mouseY >= 50 && mouseY <= 130) {
        if (mouseX >= 17 && mouseX <= 97) {
            selectedStamp = grass;
        }


    }
}

/**
 * places stamps continuously when dragging over the users canvas
 */
function mouseDragged() {
    placeSelectedStamp();

}



/**
 * places the stamps on the canvas depending on where you mouse is
 */
function placeSelectedStamp() {
    //the canvas being used for the user, it has its own layer, so the stamps
    //can be cropped out of the canvas in a way that feels natural
    //the user mouse must be WITHIN the user canvas....
    const userCanvas = mouseX >= 250 && mouseX <= 1050 &&
        mouseY >= 30 && mouseY <= 780;

    //if there is a selected stamp, and their mouse is on the usercanvas, the selected stamp 
    // prints on the canvas
    if (selectedStamp !== undefined && userCanvas) {
        stampImage.image(
            selectedStamp, mouseX - 250 - stampSize / 2, mouseY - 30 - stampSize / 2, stampSize, stampSize
        );
    }
}