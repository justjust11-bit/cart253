/**
 * Plain JavaScript Events
 * Justine Cormier 
 *  * 
 * Experimenting with event handling in plain javascript
 */

"use strict";

//information about the current and possible bkg fills
const bg = {
    fill: "#000000",
    fills: {
        black: "#000000",
        white: "#ffffff"
    },
    switchKey: 32 // Space bar
}
/**
 * creates the canvas
*/
function setup() {
    createCanvas(400, 400);

    //listen for keypresses
    window.addEventListener("keydown", changeBG);
}


/**
 * displays the background
*/
function draw() {
    background(bg.fill);
}

function changeBG(event) {
    if (event.keyCode === bg.switchKey) {

        if (bg.fill === bg.fills.black) {
            bg.fill = bg.fills.white
        }
        else {
            bg.fill = bg.fills.black;
        }
    }
}

//mouse down, mouseup, mousemove, mouseenter, mouseleave,dblclick, 
// keydown, keyup, online, offline