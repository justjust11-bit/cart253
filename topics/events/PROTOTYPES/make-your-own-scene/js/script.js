/**
 * Make Your Own Scene
 * Justine Cormier
 * 
 * refs used: https://p5js.org/reference/p5/createGraphics/
 * https://p5js.org/reference/p5/save/
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
//the layer where you will draw your stamps on the canvas
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
    drawText();

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
    //since the x of each column stays the same, accordingly, i created a variable do i wouldnt repeat
    //the numbers 17,97 or 125, 205 too much

    const leftColumn = mouseX >= 17 && mouseX <= 97;
    const rightColumn = mouseX >= 125 && mouseX <= 205;

    //all the stamps in their rows, from left to right, top down

    //GRASS STAMP
    if (mouseY >= 50 && mouseY <= 130) {
        if (leftColumn) {
            selectedStamp = grass;
        }
        //GRASS WITH BLADE STAMP
        else if (rightColumn) {
            selectedStamp = grassBlades;
        }
    }
    //SKY STAMP
    else if (mouseY >= 150 && mouseY <= 230) {
        if (leftColumn) {
            selectedStamp = sky;
        }
        //FLOWER STAMP
        else if (rightColumn) {
            selectedStamp = flower;
        }
    }
    //FLOWERS STAMP
    else if (mouseY >= 250 && mouseY <= 330) {
        if (leftColumn) {
            selectedStamp = flowers;
        }

        //CLOUD STAMP
        else if (rightColumn) {
            selectedStamp = cloud;
        }
    }
    //BUNNY STAMP
    else if (mouseY >= 350 && mouseY <= 430) {
        if (leftColumn) {
            selectedStamp = bunny;
        }
        //FOX STAMP
        else if (rightColumn) {
            selectedStamp = fox;
        }
    }

    //LOG STAMP
    else if (mouseY >= 450 && mouseY <= 530) {
        if (leftColumn) {
            selectedStamp = log;
        }
        //LEAVES STAMP
        else if (rightColumn) {
            selectedStamp = leaves;
        }
    }

    //WOOD STAMP
    else if (mouseY >= 550 && mouseY <= 630) {
        if (leftColumn) {
            selectedStamp = wood;
        }

        //DOOR STAMP
        else if (rightColumn) {
            selectedStamp = door;
        }
    }

    //WATER STAMP
    else if (mouseY >= 650 && mouseY <= 730) {
        if (leftColumn) {
            selectedStamp = water;
        }

        //HEART STAMP
        else if (rightColumn) {
            selectedStamp = heart;
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

/**
 * saves the user canvas drawing if you do ctrl-s
 */
function keyPressed(event) {
    // metaKey is Command on a Mac.
    if ((event.ctrlKey || event.metaKey)) {
        //dont do the ctrl s that your laptop would automatically do
        event.preventDefault();
        saveCanvas("amazing-art-thanks-justine", "png");
        return false;
    }
}

/**
 * draws the text that indicates how you can save
 */

function drawText() {

    push();
    textSize(20)
    textFont('Verdana')
    fill("#4c1212")
    textStyle(ITALIC)
    text("Press Ctrl or Cmd to save your drawing", 430, 23)
    pop();
}