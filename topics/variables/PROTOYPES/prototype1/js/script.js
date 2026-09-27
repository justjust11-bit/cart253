/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";






//grass
let tongueShade = {
    
    fill: "#ad3751",
    cold: "#7091bd",

}

/**
 * creates canvas
*/
function setup() {

    createCanvas(640, 480);

    
}


/**
 * draws kid with tongue stuck on metal pole
*/
function draw() {
    
    tongueShade.fill = lerpColor(tongueShade.fill, tongueShade.cold, 0.01);
    background("#cad6de");
    //grass slowly become darker
    
    //draws pole
    push();
    fill("#3c2f2f")
    rect(400,700,40,800)
    pop();
    
    
    
    //draws tongue
    push();
    fill(tongueShade.fill)
    strokeWeight(20);
    line(mouseX, mouseY, 500, 200);
    pop(); 
  
}