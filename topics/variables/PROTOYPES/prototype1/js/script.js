/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



let skinShade = {
    fill: "#",
    cold: "#"
}


//tongue
let tongue = {
    shade: {
        fill: "#ad3751",
        cold: "#83a4cf"
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
    //makes tongue turn blue over time
    tongue.shade.fill = lerpColor(tongue.shade.fill, tongue.shade.cold, 0.0018);
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


    //arms
    push();
    stroke("#5f3815")
    strokeWeight(3)
    fill("#6d371a")
    //arm on the left
    rect(mouseX - 150, mouseY + 35, 190, 50, 20)
    //arm on the right
    rect(mouseX - 30, mouseY + 35, 190, 50, 20)

    pop();

    //hands
    push();
    strokeWeight(2)
    stroke("#b29b92")
    fill("#d5bcb8")
    rect(mouseX - 190, mouseY + 35, 50, 50, 40)
    rect(mouseX + 150, mouseY + 35, 50, 50, 40)
    pop();

    //body
    push();
    stroke("#5f3815")
    strokeWeight(3)
    fill("#6d371a")
    rect(mouseX - 90, mouseY + 12, 190, 190, 80)
    //collar
    rect(mouseX - 60, mouseY + 15, 130, 30, 60)
    pop();



    //head
    push();
    stroke("#b29b92")
    strokeWeight(2)
    fill("#d5bcb8")
    ellipse(mouseX, mouseY - 80, 190, 200)
    pop();


    //mouth
    push();
    stroke("#994e39")
    strokeWeight(2)
    fill("#943444")
    ellipse(mouseX, mouseY - 25, 100, 75)
    pop();


    //eyes
    push();
    stroke("#5c3633")
    strokeWeight(10)
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

    //draw hat
    push();
    stroke("#2e3f2e")
    strokeWeight(3)
    fill("#334a35")
    ellipse(mouseX, mouseY - 160, 180, 120)
    rect(mouseX - 110, mouseY - 150, 220, 50, 12)
    //pompom
    ellipse(mouseX, mouseY - 240, 60, 60)

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



