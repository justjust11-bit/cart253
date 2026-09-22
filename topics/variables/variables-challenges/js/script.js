/**
 * Mr. Furious
 * Justine Cormier
 *
 * A guy who becomes ENRAGED!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};
//let the sky turn from blue to black
let sky = {
  //colour background
  fill: {
    r: 160,
    g: 180,
    b: 200

  }

}

//let cute peaceful bird fly accross the screen gently while making our guy mad as hell cause he sucks
let bird = {
  //position and size 
  x: 400,
  y: 80,
  size: 20,
  //colour
  fill: {
    r: 255,
    g: 255,
    b: 255,

  },

  anger: 0




}





/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);

  //mrFurious.anger += 0.1;
  //mrFurious.anger = constrain(mrFurious.anger, 0, 100);
}

/**
 * Draw (and update) Mr. Furious
*/
function draw() {
  background(sky.fill.r, sky.fill.g, sky.fill.b);

  //make the little dude more red and angryyyy

  mrFurious.fill.g -= 1;
  mrFurious.fill.b -= 1;
  //Sky goes from blue to black from ANGGERER
  sky.fill.r -= 1;
  sky.fill.g -= 1;
  sky.fill.b -= 1;

  //make mister angry league of legend player 



  //const shakeAmount = map(mrFurious.anger, 0, 100, 0, 10, true);

  // const headX = mrFurious.x + random(-shakeAmount, shakeAmount);
  //const headY = mrFurious.y + random(-shakeAmount, shakeAmount);

  mrFurious.y += random(-20, 20)
  mrFurious.x += random(-20, 20);




  // make bird move
  bird.x -= 1;
  //bird.y = i;

  //draw bird as white littke dot

  push();
  noStroke();
  fill(bird.fill.r, bird.fill.g, bird.fill.b);
  ellipse(bird.x, bird.y, bird.size);
  pop();

  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}