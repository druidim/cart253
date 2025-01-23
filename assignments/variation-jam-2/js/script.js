/**
 * Banana Squasher (Debananaging Arrays)
 * Pippin Barr
 * 
 * Squash bananas by clicking on them. Squish.
 */

"use strict";



// The bananas
let bananas = [];

// Time between bananas. This will get bigger.
const minimumBananaDelay = 0.5 * 1000;
const maximumBananaDelay = 2 * 1000;
let bananaDelay = maximumBananaDelay;

let bananaImage = undefined;
let flatBananaImage = undefined;

let car = {
    x: 450,
    y: 205,
    image: undefined,
    velocity: {
        x: 0,
        y: 5,
    },

    keys: {
        up: 83, // W
        down: 87, // S
    }
}


/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 600);

    setTimeout(addBanana, bananaDelay);
}

function preload() {
    // Load the banana image
    bananaImage = loadImage("assets/images/banana-yellow.png");
    car.image = loadImage("assets/images/car.png")
    flatBananaImage = loadImage("assets/images/flat-banana.png")
}

/**
 * Adds a banana to the array, updates the timer to get faster
 */
function addBanana() {
    // Create and add a banana
    const banana = createBanana();
    bananas.push(banana);
    // Reduce the delay
    bananaDelay -= random(0, 100);
    // Constrain it (so they don't come TOO fast)
    bananaDelay = constrain(bananaDelay, minimumBananaDelay, maximumBananaDelay);
    // Set the new timeout
    setTimeout(addBanana, bananaDelay);
}

/**
 * Creates and returns a randomized banana that will start at the top of the
 * canvas and move down
 */
function createBanana() {
    const banana = {
        x: -100,
        y: random(200, 550),
        velocity: {
            x: 3,
            y: 0
        },
        fill: "orange",
    };
    return banana;
}

/**
 * Move and display the bananas
*/
function draw() {
    background("#ddeeff");

    //Draw the road
    drawRoad();
    // Move and draw the bananas
    for (let banana of bananas) {
        moveBanana(banana);
        drawBanana(banana);
    }
    //Draw the car
    drawCar();
    //Move the car
    moveCar();
    //Checks if the car hits a banana
    checkBananaCarOverlap();
}

/**
 * Moves a banana according to its velocity
 */
function moveBanana(banana) {
    banana.x += banana.velocity.x;
    banana.y += banana.velocity.y;
}

function moveCar() {
    //moves car up
    if (keyIsDown(car.keys.up)) {
        car.y += 5;
    }
    //Moves car down
    else if (keyIsDown(car.keys.down)) {
        car.y -= 5;
    }
    car.y = constrain(car.y, 150, 525);
}

function checkBananaCarOverlap() {
    // Get distance from car to banana
    const d = dist(bananas.x, bananas.y, car.x, car.y);
    // Check if it's an overlap
    const collision = (d < bananas.y + car.y);
    if (collision) {
        //Draws the flattened version of the banana
        bananaImage = flatBananaImage;
    }
}

function drawRoad() {
    push();
    noStroke();
    fill(100, 100, 100);
    rect(0, 190, 600, 410);
    pop();
}

/**
 * Draws a banana according to its properties
 */
function drawBanana(banana) {
    push();
    noStroke();
    fill(banana.fill);
    image(bananaImage, banana.x, banana.y)
    pop();
}

function drawCar() {
    push();
    image(car.image, car.x, car.y);
    pop();
}

/**
 * Removes bananas if you click (near) them
 */
function mousePressed() {
    // We need to check EVERY banana to see if it was clicked
    for (let banana of bananas) {
        // Get the distance between the mouse and the banana
        const d = dist(mouseX, mouseY, banana.x, banana.y);
        // Check if it's close enough
        if (d < 25) {
            // If so get the index of this banana in the bananas array
            const index = bananas.indexOf(banana);
            // And remove it
            bananas.splice(index, 1);
        }
    }
}