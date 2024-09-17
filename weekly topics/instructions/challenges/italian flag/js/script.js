/**
 * Italian Flag
 * Laura Slabbert
 * 
 * I am going to try to draw an Italian flag within this code.
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!(i dont really know what to put here...
 * open program? look at screen?)
*/
function setup() {
    createCanvas(640, 640);
}
/**
 * same issue as function setup :-/
*/

function draw() {
    //draws the background
    push();
    background(100, 149, 237);
    pop();

    //draws the leftmost rectangle
    push();
    fill(0, 140, 69);
    noStroke();
    rect(100, 160, 160, 320);
    pop();

    //draws the middle rectangle
    push();
    fill(244, 249, 255);
    noStroke();
    rect(260, 160, 160, 320);
    pop();

    //draws the leftmost rectangle
    push();
    fill(205, 33, 42);
    noStroke();
    rect(420, 160, 160, 320);
    pop();
}