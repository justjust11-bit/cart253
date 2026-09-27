/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";




let roses = {
    fill: "#9e1f3f",
    x: 60,
    y: 60,
    w: 100,
    h: 150,
    minSizeW: 10,
    minSizeH: 15,
   
};

//grass
let grassShade = {
    
    fill: "#647e46",
    dark: "#273819",

}

/**
 * creates canvas
*/
function setup() {

    createCanvas(640, 480);
    grassShade.fill = color(grassShade.fill);
    grassShade.dark = color(grassShade.dark);
    
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    
    grassShade.fill = lerpColor(grassShade.fill, grassShade.dark, 0.01);
    background(grassShade.fill);
    //grass slowly become darker
   
    
    
    
    
    //flower
    push();
    fill(roses.fill);
    stroke(4);
    ellipse(roses.x, roses.y, roses.w, roses.h,);
    pop();
}