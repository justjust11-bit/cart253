/**
 * New art form
 * Justine Cormier
 * 
 * A program to generate new art form using technology.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let artData = undefined;
let technoData = undefined;
let langData = undefined;
let lang = "fr";
let stringData = undefined;

// let randomArt = undefined;
// let randomTechno = undefined;

// Starts with the instruction
let artName = "Click to generate a new art form.";

/**
 * Load the car and dinosaur data
 */
async function preload() {
    artData = await loadJSON("./assets/json/art.json");
    technoData = await loadJSON("./assets/json/techno.json");
    strings = await loadJSON(" ./assets/json/lang.json");
}

/**
 * Create the canvas
*/
async function setup() {
    createCanvas(600, 400);

    await preload();


}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(30);
    text(artName, 50, -50, 500, 500);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {
    //randomize the art array

    const randomArt = random(artData.isms)
    const randomTechno = random(technoData.technos)

    artName = randomArt + " " + randomTechno


}