/**
 * Chain Link challenge
 * Laura Slabbert
 * 
 * This program draws a chain link
 */

"use strict";

/**
 * Draws the canvas
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    //draws the background
    background(197, 246, 111);

    //draws the chains
    push();
    strokeWeight(25)
    noFill();
    ellipse(320, 320, 160, 290);
    pop();
}