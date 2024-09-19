/**
 * Introducing Variables
 * Laura Slabbert
 * 
 * Learning what variables are and what they do
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(1000, 480);

}


/**
 * Draws a circle
*/
function draw() {

    background(0);

    push();
    fill(255, 255, 0);
    noStroke();
    ellipse(width / 2, height / 2, 100, 100);
    pop();

}