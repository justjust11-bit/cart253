/**
 * BAD IDEA
 * Justine Cormier
 * 
 * A child at recess decides to lick a metal pole. He is now STUCK onto the pole!!! Oh no!
 * The cold from the pole makes his tongue turn blue, as well as his face!
 */

"use strict";





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

//skin 
let skin = {
    stroke: (3),
    outline: {
        fill: "#b29b92",
        cold: "#7884cb"
    },

    tone: {

        fill: "#d5bcb8",
        cold: "#83a1ce"
    }

}

/**
 * creates canvas
*/
function setup() {

    createCanvas(640, 480);
    //makes the tongue turn blue
    tongue.shade.fill = color(tongue.shade.fill);
    tongue.shade.cold = color(tongue.shade.cold);
    //prepares the skin colors to turn blue
    skin.outline.fill = color(skin.outline.fill);
    skin.outline.cold = color(skin.outline.cold);
    skin.tone.fill = color(skin.tone.fill);
    skin.tone.cold = color(skin.tone.cold);


}


/**
 * draws kid with tongue stuck on metal pole
*/
function draw() {
    //makes tongue turn blue over time
    tongue.shade.fill = lerpColor(tongue.shade.fill, tongue.shade.cold, 0.003);
    //makes the skin turn blue (a bit more slowly)
    skin.outline.fill = lerpColor(skin.outline.fill, skin.outline.cold, 0.0005);
    skin.tone.fill = lerpColor(skin.tone.fill, skin.tone.cold, 0.0005);
    background("#d2dbe1");


    //draws pole
    drawPole();
    //draws kid
    drawKid();
    //draws tongue
    drawTongue();
    drawText();


}

/**
 * draws the pole and the floor
 */
function drawPole() {
    //floor
    push();
    strokeWeight(0);
    fill("#b5c1c7");
    rect(0, 400, 640, 80)
    pop();



    push();
    fill("#5f5555");
    rect(500, 30, 40, 470, 16);
    pop();

    //draws top of pole
    push();
    strokeWeight(0);
    fill("#7e7676");
    ellipse(520, 39, 30, 15);
    pop();


}


/**draws the kid
 * 
 */
function drawKid() {


    //arms
    push();
    stroke("#5f2315");
    strokeWeight(3);
    fill("#6d251a");
    //arm on the left
    rect(mouseX - 150, mouseY + 35, 190, 50, 20);
    //arm on the right
    rect(mouseX - 30, mouseY + 35, 190, 50, 20);

    pop();

    //hands
    push();
    strokeWeight(skin.stroke);
    stroke(skin.outline.fill);
    fill(skin.tone.fill);
    rect(mouseX - 190, mouseY + 35, 50, 50, 40);
    rect(mouseX + 150, mouseY + 35, 50, 50, 40);
    pop();

    //body
    push();
    stroke("#5f2315");
    strokeWeight(3);
    fill("#6d251a");
    rect(mouseX - 90, mouseY + 12, 190, 190, 80);
    //collar
    rect(mouseX - 60, mouseY + 15, 130, 30, 60);
    pop();



    //head
    push();
    strokeWeight(skin.stroke);
    stroke(skin.outline.fill);
    fill(skin.tone.fill);
    ellipse(mouseX, mouseY - 80, 180, 200);
    pop();


    //mouth
    push();
    stroke("#994e39");
    strokeWeight(2);
    fill("#943444");
    ellipse(mouseX, mouseY - 25, 100, 75);
    pop();


    //eyes
    push();
    stroke("#5c3633");
    strokeWeight(10);
    fill("#65483e");
    //bottom line of right eye
    line(mouseX + 20, mouseY - 80, mouseX + 60, mouseY - 90);
    //top line of right eye
    line(mouseX + 20, mouseY - 80, mouseX + 40, mouseY - 60);

    //bottom line of left ete
    line(mouseX - 20, mouseY - 80, mouseX - 60, mouseY - 90);
    //top line of left eye
    line(mouseX - 20, mouseY - 80, mouseX - 40, mouseY - 60);
    pop();


    //hair
    push();
    stroke("#401e14");
    strokeWeight(3);
    fill("#4d290c");
    //pompom
    ellipse(mouseX - 85, mouseY - 90, 35, 90);
    ellipse(mouseX + 85, mouseY - 100, 25, 80);

    pop();



    //draw hat
    push();
    stroke("#334a33");
    strokeWeight(3);
    fill("#3c603f");
    ellipse(mouseX, mouseY - 160, 180, 120);
    rect(mouseX - 110, mouseY - 150, 220, 50, 12);
    //pompom
    ellipse(mouseX, mouseY - 240, 60, 60);

    pop();

    //draw boots
    push();
    stroke("#1c0d0a");
    strokeWeight(3);
    fill("#23120f");
    //feet part
    rect(mouseX + 10, mouseY + 180, 100, 50, 70);
    rect(mouseX - 100, mouseY + 180, 100, 50, 70);
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

/**
 * draws the text!
 */
function drawText() {

    // writes the text at the top 
    push();
    fill("#d15b65");
    textAlign(LEFT);
    textStyle(BOLD);
    textSize(90);
    text("BAD IDEA!!", 70, 100);
    pop();
}
