/**
 * Midnight snack
 * Justine Cormier
 * 
 * A minimalistic approach to a representation of the third pig in the three little pigs story.
 * The little pig is in his home with the light on, while the wolf is outside, thinking of a way to get
 *  in.
 *
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(640, 480);
    
}


/**
 * Draws the scene
*/
function draw() {
    // night sky aka background
    background(40, 40, 90)
 
    
    //no stroke everywhere
    noStroke();
    
    // ps. drawHouse includes the pig
    drawWolf();
    drawWolfOutline();
    drawGround();
    drawMoon();
    drawHouse();
    
}

/**
 * Draws the ground
 */
function drawGround() {
    
    fill(20, 20, 15);
    ellipse(320, 850, 1400, 1000);
}

/**
 * Draws the moon
 */
function drawMoon() {
    
    // MOON SHINE, alpha AKA opacity of the moon, making it glow
    let c = color(255, 204, 0);
    
    //moon
    push();
    fill(255, 255, 200);
    ellipse(110, 100, 100, 100);
    pop();
    
    //moon glow
    push();
    fill(255, 255, 200, 40);
    ellipse(110, 100, 150, 150);
    c.setAlpha(100);
    pop();
    
    
}

function drawHouse() {
    drawBody();
    drawWindow();
    drawPig();
    
    /**
     * Draws the body AND THE ROOF and CHIMNEY of the house
     */
    function drawBody() {
        // house body
        push();
        fill(22, 20, 15);
        rect(350, 200, 240, 200);
        pop();

        // roof
        push();
        fill(22, 20, 15);
        triangle(340, 200, 470, 105, 600, 200);
        pop();
    
        // Chimney
        push();
        fill(22, 20, 15);
        rect(530, 120, 42, 80);
        pop();
    
    }
    

    function drawWindow() {
       
         
        let c = color(255, 204, 0);
        // window
        push();
        fill(102, 52, 40);
        rect(470, 249, 60, 60, 3);
        pop();
        
        // inside house shine, added opacity
        push();
        fill(255, 255, 200, 40);
        ellipse(500, 290, 50, 50, 3);
        c.setAlpha(100);
        pop();
    }


    
        function drawPig() {
            // pig head
            push();
            fill(26, 20, 15);
            ellipse(500, 290, 28, 30);
            pop();
        
            //pig body
            push();
            fill(22, 20, 15);
            ellipse(503, 315, 40, 30);
            pop();
        
            // pig ear
            push();
            fill(22, 20, 15);
            triangle(500, 280, 500, 270, 511, 280);
            pop();
        
            //pig snout
            push();
            fill(26, 20, 15);
            ellipse(487, 292, 10, 10);
            pop();
        }
    }

function drawWolf() {

    // wolf head
    //snout
    push();
    fill(22, 20, 15);
    rect(140, 283, 60, 38, 6);
    //top part of head
    rect(140, 275, 28, 20, 10);
    pop();
    
    //wolf ears
    push();
    fill(22, 20, 15);
    triangle(140, 282, 140, 265, 150, 275);
    pop();
    
    //wolf body
    push();
    fill(22, 20, 15);
    ellipse(135, 360, 80, 110);
    pop();
    
    //wolf tail
    push();
    fill(22, 20, 15);
    ellipse(92, 400, 40, 80);
    pop();
}
    
function drawWolfOutline() {
    // blends in with background, used to make wolf body shaped better
    push();
    fill(40, 40, 90);
    rect(160, 302, 80, 100, 30);
    pop();
}