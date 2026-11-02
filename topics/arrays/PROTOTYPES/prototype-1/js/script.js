/**
 * New job!
 * Justine Cormier
 * 
 * You applied for a job you aren't qualified for. What's the worst that can happen, 
 * you can probably figure this out! Visual novel-esque mini game, you click to progress 
 * the story, and use the UP and DOWN arrows when confronted with a choice to make a selection.
 * 
 * refs used: 
 * https://editor.p5js.org/pippinbarr/sketches/wfDOLrIm13
 * used flies flies flies and buzzy the return value as ref
 */

"use strict";

//game states
let intro = true;
let inGame = false;
let fired = false;
let promoted = false;

//different possible background colours
let bkg = {
    intro: "black",
    inGame: "#3e4866",
    fired: "#840808",
    raise: "#268f79"
}


//texts that will be in the intro speech box
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

];

//text choices to choose from
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

//end game results, you are either fired or promoted
const choiceResult = [
    "You failed to warn the world of a magnitude 9 earthquake. The world is in shambles and it's your fault.",
    "Lucky you! You guessed the right earthquake level. You got a promotion due to outstanding performance, so you no longer work in this department. You are now payed to scroll on your phone for 8 hours.",
    "You alarmed the entire world for no reason. You're fired. Nobody wants to speak to you anymore."
]

//choice result index
let resultIndex = 0;

//the selectable choices in ingame (all the earthquakes)
let selectedChoice = 0;

// the dialogue in intro and ingame in the box
let speechIndex = 0;


//if you get fired or promoted
let jobCondition = undefined;

//speech box
let box = {
    x: 70,
    y: 620,
    w: 940,
    h: 150,
    padding: 40,
    fontSize: 27,
};

//the colourful boxes, placed on the screen once youre confronted with the option of choice
let choiceBoxes = [];


/**
 * draws the canvas
*/
function setup() {
    createCanvas(1080, 800)

    //each box displays the same dimensions except for the text (multipleChoice)
    //choice 0 is 1- insignificant level earthquake
    choiceBoxes.push(createChoiceBox(multipleChoice[0], 250, 564, 580, 51, "#dfd5d5", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[1], 250, 509, 580, 50, "#61acc3", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[2], 250, 454, 580, 50, "#3f769a", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[3], 250, 389, 580, 60, "#478742", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[4], 250, 324, 580, 60, "#89d21c", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[5], 250, 259, 580, 60, "#ddad29", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[6], 250, 184, 580, 70, "#df6c00", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[7], 250, 110, 580, 70, "#df4116", 23));
    choiceBoxes.push(createChoiceBox(multipleChoice[8], 250, 6, 580, 100, "#d60000", 23));
    //

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
 * draws the intro screen with the paper and the text box, the game over, and the selection on the boxes
*/
function draw() {
    if (fired || promoted) {
        drawGameOvers();
        return;
    }
    drawIntro();
    drawSelection();

}

/**
 * draws the intro screen, and switches to ingame state
 */
function drawIntro() {
    if (intro) {
        drawResume();
        boxText();
    }

    if (!intro && inGame) {
        drawInGame();
    }

}

/**
 * draws the selection on the selection boxes (strokeWeight)
 */
function drawSelection() {
    if (inGame && speechIndex === inGameSpeech.length - 1) {
        for (let choiceBox of choiceBoxes) {
            //isSelected identifies what choice is selected by the user
            let isSelected = choiceBox === choiceBoxes[selectedChoice];
            drawChoiceBox(choiceBox, isSelected);
        }

    }
}

/**
 * draws the at work scene, with the button panel, the box text
 */

function drawInGame() {

    background(bkg.inGame)
    drawButtonPanel();
    boxText();
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
        //the text inside the box
        push();
        fill("#f3f1eb");
        textFont('verdana')
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
        rect(box.x, box.y, box.w, box.h, 5);
        pop();
        //the text in the box
        push();
        fill("#121211");
        textFont('verdana')
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
            // advance the line
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
    //if you lose/win the game, clicking will get you back ingame, so you can retry if you want
    if (fired || promoted) {
        inGame = true;
        fired = false;
        promoted = false;
        speechIndex = 0;
    }
}

/**
 * draws the button panel
 */

function drawButtonPanel() {
    //draw the board
    push();
    stroke(10)
    strokeWeight(10)
    fill("#212020")
    rect(90, 80, 900, 490, 1)
    pop();
    //draw buttons
    push();
    //three red buttons from big to small
    stroke("#2d0505")
    strokeWeight(6)
    fill("#8f0c0c")
    ellipse(200, 450, 90);
    ellipse(320, 455, 80);
    ellipse(420, 460, 50);
    //green buttons in a row
    fill("#216205")
    stroke("#062806")
    //top row
    ellipse(700, 250, 50);
    ellipse(800, 250, 50);
    ellipse(900, 250, 50);
    //second row
    ellipse(700, 350, 50);
    ellipse(800, 350, 50);
    ellipse(900, 350, 50);
    //grey/white lines
    fill("#c2d7de")
    stroke("#425357")
    rect(180, 150, 350, 20)
    rect(180, 200, 350, 20)
    rect(180, 250, 350, 20)
    //big black circle
    fill("#0f0e0e")
    stroke("#000000")
    rect(650, 440, 240, 80, 80)
    pop();
}

/**
 * draws the selection boxes
 */
function drawChoiceBox(choiceBox, isSelected) {

    //draws the box when selected (stroke is white and thicker)
    push();
    if (isSelected) {
        stroke("#fdffdc")
        strokeWeight(13)
    }
    //when the box is not selected, (black and thing stroke)
    else {
        strokeWeight(5)
        stroke("#252738");
    }

    //choicebox draw, where the variables were created in createChoiceBox
    fill(choiceBox.fill);
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

    //down arrow makes you go down
    if (keyCode === 40) {
        selectedChoice--
    }
    //up arrow makes you go up
    if (keyCode === 38) {
        selectedChoice++
    }
    //constrain the 9 possibilities so the player does bug outside of the choices that are available
    selectedChoice = constrain(selectedChoice, 0, 8);

    //if the player presses Enter at any moment inGame
    if (inGame === true && keyCode === 13 && speechIndex === inGameSpeech.length - 1) {
        incomingEarthquake();
    }
}

/**
draws the game over screens
*/

function drawGameOvers() {
    if (fired === true) {
        background(bkg.fired)

        push();
        textAlign(CENTER, CENTER);
        fill("#efe5e5");
        textSize(50);
        //choose the first option in the index of choice result
        text(choiceResult[resultIndex], 200, height / 2, 700)
        pop();
    }

    if (promoted === true) {
        background(bkg.raise)
        push();
        textAlign(CENTER, CENTER);
        fill("black");
        textSize(50);
        //choose the first option in the index of choice result
        text(choiceResult[resultIndex], 200, height / 2, 700)
        pop();


    }
}

/**
 * randomizes the levels of earthquake that appear
 */
function incomingEarthquake() {

    //floor rounds to round numbers with no .0000
    let randomEarthquake = floor(random(1, 10))
    //+1 because the index has 0, so we skip over that
    let playerGuess = selectedChoice + 1;

    // use this if you are curious about the specific # earthquake you got:
    // console.log("Earthquake:", randomEarthquake, "Your guess:", playerGuess);

    if (playerGuess < randomEarthquake) {
        resultIndex = 0;
        fired = true;
        promoted = false;
    }
    else if (playerGuess === randomEarthquake) {
        resultIndex = 1;
        promoted = true;
        fired = false;
    }
    else {
        resultIndex = 2;
        fired = true;
        promoted = false;
    }




}
