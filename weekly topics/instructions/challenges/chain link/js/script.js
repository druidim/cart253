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

    //draws the top chain
    push();
    strokeWeight(25)
    noFill();
    ellipse(320, 0, 160, 250);
    pop();

    //draws the second chain
    push();
    strokeWeight(25)
    noFill();
    ellipse(320, 160, 160, 250);
    pop();

    //draws the middle/third chain
    push();
    strokeWeight(25)
    noFill();
    ellipse(320, 320, 160, 250);
    pop();

    //draws the fourth chain
    push();
    strokeWeight(25)
    noFill();
    ellipse(320, 480, 160, 250);
    pop();

    //draws the fifth/bottom/last chain
    push();
    strokeWeight(25)
    noFill();
    ellipse(320, 640, 160, 250);
    pop();
}