/**
 * Title of Project
 * Justine Cormier
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * https://editor.p5js.org/pippinbarr/sketches/wfDOLrIm13
 * used flies flies flies and buzzy the return value as ref
 */

"use strict";

//game states
let intro = false;
let inGame = true;
let fired = false;

let bkg = {
    intro: "black",
    inGame: "#3e4866",
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
    "What magnitude do you guess it to be?"
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
    "7 - Destructive!",
    "8 - Very destructive!!",
    "9 - Extreme Disaster!!! EVACUATE EVERYTHING EVERYONE"
]


///
let selectedChoice = 0;

let speechIndex = 0;

let box = {
    x: 70,
    y: 620,
    w: 940,
    h: 150,
    padding: 40,
    fontSize: 27,
};

let choiceBoxes = [];


/**
 * draws the canvas
*/
function setup() {
    createCanvas(1080, 800)

}


/**
 * 
 *creates the choice box with parameters that are specififed in setup
 */
function createChoiceBox(choiceText, x, y, w, h, fill, fontSize) {
    let choiceBox = {
        text: choiceText,
        x: x,
        y: y,
        w: w,
        h: h,
        padding: 1,
        fontSize: fontSize,
        fill: fill
    };
    return choiceBox;

}



/**
 * draws the intro screen with the paper and the text box
*/
function draw() {
    drawIntro();
    drawSelection();

    //each box displays the same dimensions except for the text (multipleChoice)
    //choice 0 is 1- insignificant
    choiceBoxes.push(createChoiceBox(multipleChoice[0], 250, 564, 580, 51, "#dfd5d5", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[1], 250, 509, 580, 50, "#61acc3", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[2], 250, 454, 580, 50, "#3f769a", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[3], 250, 389, 580, 60, "#478742", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[4], 250, 324, 580, 60, "#89d21c", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[5], 250, 259, 580, 60, "#ddad29", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[6], 250, 184, 580, 70, "#df6c00", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[7], 250, 110, 580, 70, "#df4116", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[8], 250, 6, 580, 100, "#d60000", 23));
    //2

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
 * draws the selection on the selection boxes
 */
function drawSelection() {
    if (inGame && speechIndex === inGameSpeech.length - 1) {
        for (let choiceBox of choiceBoxes) {
            //isSelected is a new variable that identifies what choice is selected
            let isSelected = choiceBox === choiceBoxes[selectedChoice];
            drawChoiceBox(choiceBox, isSelected);
        }

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
function drawChoiceBox(choiceBox, isSelected) {
    console.log(isSelected)

    //draws one selection box
    push();
    if (isSelected) {
        strokeWeight(10)
    }
    else {
        strokeWeight(3)
    }

    fill(choiceBox.fill);
    stroke("#252738");
    rect(choiceBox.x, choiceBox.y, choiceBox.w, choiceBox.h, 5);
    fill("#121211");
    noStroke();
    textSize(choiceBox.fontSize);
    textStyle(BOLD)
    textFont('verdana')
    textAlign(CENTER, CENTER);
    text(choiceBox.text, choiceBox.x, choiceBox.y, choiceBox.w, choiceBox.h);
    pop();


    return choiceBox;

}

/**
 * using up and down arrows will make  you select your choice
 */
function keyPressed() {
    if (keyCode === 40) {
        selectedChoice++
    }
    if (keyCode === 38) {
        selectedChoice--
    }
    //constrain the 9 possibilities so it doesnt bug
    selectedChoice = constrain(selectedChoice, 0, 8);
}

