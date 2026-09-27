/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";






//grass
let tongue = {
    shade: {
        fill: "#ad3751",
        cold: "#7091bd"
    }

}

/**
 * creates canvas
*/
function setup() {

    createCanvas(640, 480);
    tongue.shade.fill = color(tongue.shade.fill);
    tongue.shade.cold = color(tongue.shade.cold);

    
}


/**
 * draws kid with tongue stuck on metal pole
*/
function draw() {
    
    tongue.shade.fill = lerpColor(tongue.shade.fill, tongue.shade.cold, 0.003);
    background("#cad6de");
    //grass slowly become darker
    
    //draws pole
    push();
    fill("#3c2f2f")
    rect(400,700,40,800)
    pop();
    
    
    
    //draws tongue
    push();
    stroke(tongue.shade.fill);
    strokeWeight(30);
    line(mouseX, mouseY, 500, 250);
    rect(500, 220, 1, 30, 30 )
    pop(); 
  
}