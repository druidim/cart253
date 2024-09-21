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

    //draws the green rectangle
    push();
    fill(0, 140, 69);
    noStroke();
    rect(80, 160, 160, 320);
    pop();

    //draws the white rectangle
    push();
    fill(244, 249, 255);
    noStroke();
    rect(240, 160, 160, 320);
    pop();

    //draws the red rectangle
    push();
    fill(205, 33, 42);
    noStroke();
    rect(400, 160, 160, 320);
    pop();
}