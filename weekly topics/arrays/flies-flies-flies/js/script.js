/**
 * Flies flies flies!
 * Pippin Barr
 * 
 * A project 
 */

"use strict";

// Our array of flies (specifically "fly data" really)
// Each fly has a position and a size !
let flies = [];

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(300, 300);
}


function createFly() {
    let fly = {
        x: random(0, width),
        y: random(0, height),
        size: random(2, 10),
        buzziness: random(2, 8),
    };
    return fly;
}

/**
 * Moves and displays the flies
 */
function draw() {
    background("#87ceeb");

    // Go through all the flies
    for (let fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }
}

/**
 * Moves the fly by changing its position randomly
 * according to its buzziness
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draws the fly parameter to canvas
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

function keyPressed() {
    //add a new fly to the array
    const newFly = createFly();
    flies.push(newFly);
}

function mousePressed() {
    //check all the flies..
    for (let fly of flies) {
        const d = dist(mouseX, mouseY, fly.x, fly.y);
        if (d < fly.size / 2) {
            //this fly was clicked!
            //get the index of this fly
            const index = flies.indexOf(fly);
            //splice it out of the array
            flies.splice(index, 1);
        }
    }
}
