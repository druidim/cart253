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

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 600);

    setTimeout(addBanana, bananaDelay);
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
        y: random(0, width),
        velocity: {
            x: random(2, 10),
            y: 0
        },
        size: random(15, 40),
        fill: "#445566"
    };
    return banana;
}

/**
 * Move and display the bananas
*/
function draw() {
    background("#ddeeff");

    // Move and draw the bananas
    for (let banana of bananas) {
        moveBanana(banana);
        drawBanana(banana);
    }
}

/**
 * Moves a banana according to its velocity
 */
function moveBanana(banana) {
    banana.x += banana.velocity.x;
    banana.y += banana.velocity.y;
}

/**
 * Draws a banana according to its properties
 */
function drawBanana(banana) {
    push();
    noStroke();
    fill(banana.fill);
    ellipse(banana.x, banana.y, banana.size);
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
        if (d < banana.size * 2) {
            // If so get the index of this banana in the bananas array
            const index = bananas.indexOf(banana);
            // And remove it
            bananas.splice(index, 1);
        }
    }
}