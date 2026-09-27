/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";






//tongue
let tongue = {
    shade: {
        fill: "#ad3751",
        cold: "#7091bd"
    },
    tip: {
        x: 500,
        y: 220,
        w: 1,
        h: 30,
        radius: 10
    },
    longPart: {
        w: 500,
        h: 250
    },
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

    tongue.shade.fill = lerpColor(tongue.shade.fill, tongue.shade.cold, 0.002);
    background("#d2dbe1");


    //draws pole
    drawPole();
    //draws kid
    drawKid();
    //draws tongue
    drawTongue();



}

/**
 * drawsthe pole
 */
function drawPole() {
    push();
    fill("#5f5555")
    rect(500, 30, 40, 470, 16)
    pop();

    //draws top of pole
    push();
    strokeWeight(0)
    fill("#7e7676")
    ellipse(520, 39, 30, 15)
    pop();

}


/**draws the kid
 * 
 */
function drawKid() {

    //head
    push();
    stroke("#de9893")
    strokeWeight(0)
    fill("#c2aca4")
    ellipse(mouseX, mouseY - 60, 190, 195)
    pop();


    //mouth
    push();
    stroke("#b86751")
    strokeWeight(2)
    fill("#983d4c")
    ellipse(mouseX, mouseY - 25, 100, 75)
    pop();


    //eyes
    push();
    stroke("#5c3633")
    strokeWeight(6)
    fill("#65483e")
    //bottom line of right eye
    line(mouseX + 20, mouseY - 80, mouseX + 60, mouseY - 90)
    //top line of right eye
    line(mouseX + 20, mouseY - 80, mouseX + 40, mouseY - 60)

    //bottom line of left ete
    line(mouseX - 20, mouseY - 80, mouseX - 60, mouseY - 90)
    //top line of left eye
    line(mouseX - 20, mouseY - 80, mouseX - 40, mouseY - 60)
    pop();


}


/**
 * draws the tongue
 */
function drawTongue() {

    push();
    stroke(tongue.shade.fill);
    strokeWeight(30);
    //draws long part of tongue
    line(mouseX, mouseY - 2, tongue.longPart.w, tongue.longPart.h);
    //draws tip of tongue
    rect(tongue.tip.x, tongue.tip.y, tongue.tip.w, tongue.tip.h, tongue.tip.radius);
    pop();

}



