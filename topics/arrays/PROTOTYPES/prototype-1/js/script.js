/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * https://editor.p5js.org/pippinbarr/sketches/wfDOLrIm13
 */

"use strict";

//game states
let intro = false;
let inGame = true;
let fired = false;

let bkg = {
    intro: "black",
    inGame: "#4e566c",
    fired: "red"
}




//texts that will be in the speech box
const introSpeech = [
    "You applied for a job you are unqualified for.",
    "After a thorough investigation with HR...",
    "You've been hired!",
    "Congratulations, and welcome to your new job!"
];

//text ingame, before multiple selection option
const inGameSpeech = [
    "",
    "First day on the job...",
    "You now work at an earthquake detection center.",
    "...",
    "An earthquake is incoming...",
    "Your lack of technical competence prevents you from making an educated guess.",
    "What magnitude do you guess it is?"
    //maybe you get payed by the earthquake announcement

];

//text choices to choose
const multipleChoice = [
    "1 - Insignificant",
    "2 - Slightly felt",
    "3 - Minor",
    "4 - Moderate",
    "5 - Slight structural damage possible",
    "6 - Serious Accident",
    "7 - Destructive",
    "8 - Very destructive",
    "9 - Extreme Disaster"
]


///
let selectedChoice = 0;

let speechIndex = 0;

let box = {
    x: 70,
    y: 600,
    w: 940,
    h: 150,
    padding: 40,
    fontSize: 25,
};

let choiceBoxes = [];





/**
 * draws the canvas
*/
function setup() {
    createCanvas(1080, 800)

    //each box displays the same dimensions except for the text (multipleChoice)
    //choice 0 is 1- insignificant
    choiceBoxes.push(createChoiceBox(multipleChoice[0], 400, 400, 200, 60));
    //2
    choiceBoxes.push(createChoiceBox(multipleChoice[1], 400, 470, 200, 60));
    choiceBoxes.push(createChoiceBox(multipleChoice[2], 400, 540, 200, 60));
    choiceBoxes.push(createChoiceBox(multipleChoice[3], 400, 610, 200, 60));

}


/**
 * 
 *creates the choice box with parameters that are specififed in setup
 */
function createChoiceBox(choiceText, x, y, w, h) {
    let choiceBox = {
        text: choiceText,
        x: x,
        y: y,
        w: w,
        h: h,
        padding: 1,
        fontSize: 23,
    };
    return choiceBox;

}



/**
 * draws the intro screen with the paper and the text box
*/
function draw() {
    drawIntro();

    if (inGame && speechIndex === inGameSpeech.length - 1) {
        for (let choiceBox of choiceBoxes) {
            drawChoiceBox(choiceBox);
        }

    }
}

/**
 * draws the intro screen
 */
function drawIntro() {
    if (intro) {
        drawResume();
        boxText();
    }

    if (!intro && inGame) {
        drawInGame();
        boxText();
    }

}

/**
 * draws the at work scene
 */

function drawInGame() {

    background(bkg.inGame)



}

/**
 * draws the resume paper in the intro screen
 */
function drawResume() {
    background(bkg.intro)

    //white paper
    push();
    fill("#f0efe5")
    rect(400, 100, 300, 400)
    pop();

    //text on CV
    push();
    fill("#343333")
    textSize(20)
    textFont("times new roman")
    text("Your Name", 430, 160)
    textSize(50)
    text("CV", 515, 320)
    pop();


}


/**
 * display the text in a dialogue box
 */
function boxText() {


    // The text dimensions for the text to wrap inside, including
    // the padding of the dialog box
    if (intro) {
        // The background box
        push();
        fill(20);
        stroke("#d3cbb3");
        strokeWeight(3);
        rect(box.x, box.y, box.w, box.h);
        pop();

        push();
        fill("#f3f1eb");
        textSize(box.fontSize);
        text(introSpeech[speechIndex], box.x + box.padding, box.y + box.padding, box.w - 2 * box.padding, box.h - 2 * box.padding);
        pop();
    }
    else if (inGame) {

        // The background box
        push();
        fill("#bbc8db");
        stroke("#252738");
        strokeWeight(4);
        rect(box.x, box.y, box.w, box.h, 10);
        pop();

        push();
        fill("#121211");
        textSize(box.fontSize);
        text(inGameSpeech[speechIndex], box.x + box.padding, box.y + box.padding, box.w - 2 * box.padding, box.h - 2 * box.padding);
        pop();
    }
}


/**
 * When the user clicks, advance the speech if there's more
 */
function mousePressed() {
    // if not at the end of the speech aready
    if (intro) {
        if (speechIndex < introSpeech.length - 1) {
            // Advance the line
            speechIndex++;
        }
        else {
            intro = false;
            inGame = true;
            speechIndex = 0;
        }
    } else if (inGame && speechIndex < inGameSpeech.length - 1) {
        speechIndex++;
    }
}

/**
 * draws the button panel
 */

function drawButtonPanel() {
    //draw the board
    push();
    stroke(100)
    strokeWeight(10)
    fill("#585858")
    rect(100, 100, 880, 450, 5)
    pop();


}

/**
 * draws the selection boxes
 */
function drawChoiceBox(choiceBox) {

    //draws one selection box
    push();
    fill("#f0efe5");
    stroke("#252738");
    strokeWeight(3);
    rect(choiceBox.x, choiceBox.y, choiceBox.w, choiceBox.h, 5);
    fill("#121211");
    noStroke();
    textSize(choiceBox.fontSize);
    textStyle(BOLD)
    textAlign(CENTER, CENTER);
    text(multipleChoice[selectedChoice], choiceBox.x, choiceBox.y, choiceBox.w, choiceBox.h);
    pop();


    return choiceBox;

}


