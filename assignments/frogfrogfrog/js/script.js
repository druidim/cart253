/**
 * Frogfrogfrog
 * Laura Slabbert
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with A dnd W keys
 * - Press W to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

//Timer for the Frog game (60 seconds)
let time = {
    passed: 0,
    threshold: 1800
}



// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound

    },
    // Keys that control the frog's movement
    keys: {
        leftKey: 65, // A
        rightKey: 68 // D
    }
}

// Our fly
//creates the fly that appears during the game
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3,
};

//creates the flies at the end of the game
let buzzyFly = {
    x: undefined,
    y: undefined,
    size: 10,
    buzziness: 4,
};




/**
 * Creates the canvas, text, and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // Text settings
    textSize(32);
    textAlign(CENTER, CENTER);

    // Give the fly its first random position
    resetFly();
}

//the states of our program listed as properties
const States = {
    TITLE: "title",
    GAME: "frogGamePlay",
    ENDING: "ending"
};

// Text to display for the title and ending
let titleString = "FrogFrogFrog";
//LAURA ADD INSTRUCTIONS ON HOW THIS WORKS. LIKE TEXT ON THE SCREEN
let endingString = "Fly Party!!!";
//LAURA YOU HAVE TO CHANGE THIS IF YOU CAN'T GET THE FLY ENDING THING TO WORK

// display the TITLE when the program runs
let state = "title";

/**
 * Create the canvas, set up text
 */


/**
 * Depending on the current state, run the function
 * to handle the state.
 */
function draw() {
    // Check the state and call the appropriate function
    if (state === "title") {
        title();
    }
    else if (state === "frogGamePlay") {
        frogGamePlay();
    }
    else if (state === "ending") {
        ending();
    }
}

/**
 * Displays the title and waits for the user to press the ENTER key
 */
function title() {
    background("#c6e9f7");//a light blue

    push();
    fill("#177d0b");//a dark green
    text(titleString, width / 2, height / 2)
    pop();

    if (keyIsPressed === true) {
        state = "frogGamePlay";
    }
}
//checks if the game has been started
if (state === States.frogGamePlay) {

    //calls the frog game's elements to be drawn
    function draw() {
        background("#87ceeb");//dark blue
        moveFly();
        drawFly();
        moveFrog();
        moveTongue();
        drawFrog();
        checkTongueFlyOverlap();
        countSeconds();
    }
}
else if (state === States.ending) {
    function draw() {
        background("#c6e9f7");//light blue
        survivingFlies();
        flyCounter();
        fliesSurvivedText();
    }
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Moves the frog in the direction of the keys pressed
 */
function moveFrog() {
    //moves frog left
    if (keyIsDown(frog.keys.leftKey)) {
        frog.body.x -= 5;
    }
    else if (keyIsDown(frog.keys.rightKey)) {
        frog.body.x += 5;
    }
    //stops the frog from going offscreen
    frog.body.x = constrain(frog.body.x, frog.body.size / 2, width - frog.body.size / 2);
}


/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

function countSeconds() {//LAURA should it be checkinput?
    //counts up to 60 seconds, at which point the ending screen is displayed
    if (state === "frogGamePlay")
        time.passed += 1;

    if (time.passed >= time.threshold)
        state === "ending"
}

/**
 * Launch the tongue on key press (W) (if it's not launched yet)
 */
function keyPressed(event) {
    if (event.keyCode === 87) {
        frog.tongue.state = "outbound";
    }
}

/**
 * Counts how many flies escape the frog
 */
flyCounter();

/**
 * Displays the escaped flies buzzing around
 */
survivingFlies();
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

//text that celebrates the flies' survival
function fliesSurvivedText() {

    push();
    text('Flies escaped:')
    pop();

    push();
    fill("#ffffff");
    text(endingString, width / 2, height / 2)
    pop();
}
