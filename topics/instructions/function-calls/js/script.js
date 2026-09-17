/**
 * The blank page
 * Justine Cormier (but really, Pippin Barr)
 * 
 * An exploration of the existential angst of a novelist 
 * who must sit down at their pink desk and confront the 
 * abyss that is a blank page of paper
 * 
 * The program is non-interactive to convey the inability
 * to get started on the project. Try typing! Just try it!
 */

"use strict";

/**
 * Creates the canvas for our masterpiece
 */
function setup() {
    // Create the cancas at a standard resolution
    createCanvas(640, 480); //wide, high
}

/**
 * Draws the writers desktop and a blank piece of paper
 */

function draw() {
    // The pink desktop
    background(255, 100, 100); 
    //The blank piece of paper
    rect(200,80,240,320); //x, y,(initial spot) wide, high
}