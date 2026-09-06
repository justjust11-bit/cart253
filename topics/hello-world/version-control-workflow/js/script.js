/**
 * Git Workflow Example
 * Pippin Barr
 * 
 * Some sample code for playing with version control.
 * Draws a pyramid in the centre of the canvas and a
 * red circle at the user's mouse position.
 */

"use strict";

/**
 * Create a canvas, hides the cursor
*/
function setup() {
    // A 840x840 canvas
    createCanvas(840, 840);

    // Don't show the cursor
    noCursor();
}

/**
 * Draws a top-down view of a pyramid and also a red circle
 * at the position of the user's cursor
*/
function draw() {
    // Make the background black (specified as RGB)
    background(90, 0, 90);

    // Draw a pyramid
    // How many levels for the pyramid
    const levels = 22;
    // Loop through every level (backwards)
    for (let level = levels; level > 0; level--) {
        // Draw this layer
        push();
        // Set the grey shade of the level based on its number
        // e.g. level 1 will get a shade of 10 (dark gray), 
        // level 10 will be 255(white)
        const shade = map(level, 1, levels, 0, 150);
        // No line around the levels
        noStroke();
        // Set the fill colour to our shade (RGB)
        fill(50, shade, 100);
        // Draw rectangles from the centre
        rectMode(CENTER);
        // Draw the rectangle in the centre of the canvas
        // (320, 320) with a size based on the level
        // e.g. level 1 will be a 48x48 rectangle and
        // level 10 will be a 480x480 rectangle
        rect(320, 320, level * 48, level * 48);
        pop();
    }

    // Draw a red circle at the position of the mouse
    push();
    // No line around the shape
    noStroke();
 
    // Make it DARK (RGB)
    fill(40, 20, 40);
    // Draw a 100x100 circle at the mouse position
    // Spaceship width
    ellipse(mouseX, mouseY, 340, 45);
         //spaceship top and bottom (head and tail)
    ellipse(mouseX, mouseY - 20, 130, 70);
    //lights on ship, starting from the middle to the extremities
    fill(100,100,100);
    ellipse(mouseX, mouseY + 14, 9, 6);
    ellipse(mouseX + 60, mouseY + 14, 9, 6);
    ellipse(mouseX - 60, mouseY + 14, 9, 6);
    ellipse(mouseX + 110, mouseY + 10, 8, 5);
    ellipse(mouseX - 110, mouseY + 10, 8, 5);
    ellipse(mouseX + 155, mouseY + 2, 7, 4);
    ellipse(mouseX - 155, mouseY + 2, 7, 4);

    //shine on cap
    fill(40,30,60);
    ellipse(mouseX + 30, mouseY - 40, 17, 10);
   
    pop();
}
